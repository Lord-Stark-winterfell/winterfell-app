const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 3000);
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'winterfell2026';
const LEGACY_ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';
const SESSIONS = new Map();
const SESSION_TTL_MS = 1000 * 60 * 60 * 8;
const COLLECTIONS = new Set(['players', 'matches', 'news', 'gallery']);
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

function sendJson(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(payload, null, 2));
}

function sendText(res, status, text) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(text);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 5 * 1024 * 1024) {
        reject(new Error('Слишком большой запрос'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function dataPath(collection) {
  return path.join(ROOT, 'data', `${collection}.json`);
}

function createSession() {
  const token = crypto.randomBytes(32).toString('hex');
  SESSIONS.set(token, Date.now() + SESSION_TTL_MS);
  return token;
}

function isAuthorized(req) {
  const token = req.headers['x-admin-token'];
  if (!token) return false;
  if (LEGACY_ADMIN_TOKEN && token === LEGACY_ADMIN_TOKEN) return true;
  const expiresAt = SESSIONS.get(token);
  if (!expiresAt) return false;
  if (expiresAt < Date.now()) {
    SESSIONS.delete(token);
    return false;
  }
  SESSIONS.set(token, Date.now() + SESSION_TTL_MS);
  return true;
}

async function handleAuth(req, res, pathname) {
  if (pathname === '/api/auth/check') {
    return sendJson(res, isAuthorized(req) ? 200 : 401, { authorized: isAuthorized(req) });
  }

  if (pathname === '/api/auth/login' && req.method === 'POST') {
    try {
      const body = await readBody(req);
      const payload = JSON.parse(body || '{}');
      const login = String(payload.login || '').trim();
      const password = String(payload.password || '');
      if (login !== ADMIN_USER || password !== ADMIN_PASSWORD) {
        return sendJson(res, 401, { error: 'Неверный логин или пароль' });
      }
      return sendJson(res, 200, { token: createSession(), expiresInHours: 8 });
    } catch (error) {
      return sendJson(res, 400, { error: 'Некорректные данные входа' });
    }
  }

  if (pathname === '/api/auth/logout' && req.method === 'POST') {
    const token = req.headers['x-admin-token'];
    if (token) SESSIONS.delete(token);
    return sendJson(res, 200, { ok: true });
  }

  return sendJson(res, 404, { error: 'Неизвестный auth-раздел' });
}

async function handleApi(req, res, pathname) {
  if (pathname.startsWith('/api/auth/')) {
    return handleAuth(req, res, pathname);
  }

  if (pathname === '/api/status') {
    return sendJson(res, 200, {
      ok: true,
      storage: 'json-files',
      protected: true,
      collections: Array.from(COLLECTIONS)
    });
  }

  const match = pathname.match(/^\/api\/data\/([a-z]+)$/);
  if (!match || !COLLECTIONS.has(match[1])) {
    return sendJson(res, 404, { error: 'Неизвестный API-раздел' });
  }

  const collection = match[1];
  const file = dataPath(collection);

  if (req.method === 'GET') {
    try {
      const raw = await fs.promises.readFile(file, 'utf-8');
      return sendJson(res, 200, JSON.parse(raw));
    } catch (error) {
      return sendJson(res, 500, { error: `Не удалось прочитать ${collection}.json` });
    }
  }

  if (req.method === 'POST') {
    if (!isAuthorized(req)) {
      return sendJson(res, 401, { error: 'Нужна авторизация администратора' });
    }
    try {
      const body = await readBody(req);
      const payload = JSON.parse(body || '[]');
      if (!Array.isArray(payload)) {
        return sendJson(res, 400, { error: 'Данные должны быть массивом записей' });
      }
      await fs.promises.writeFile(file, JSON.stringify(payload, null, 2), 'utf-8');
      return sendJson(res, 200, payload);
    } catch (error) {
      return sendJson(res, 400, { error: error.message });
    }
  }

  return sendJson(res, 405, { error: 'Метод не поддерживается' });
}

function serveStatic(req, res, pathname) {
  let safePath = decodeURIComponent(pathname);
  if (safePath === '/') safePath = '/index.html';
  if (safePath === '/admin') safePath = '/admin.html';
  const requested = path.normalize(path.join(ROOT, safePath));
  if (!requested.startsWith(ROOT)) return sendText(res, 403, 'Доступ запрещён');

  fs.stat(requested, (statError, stats) => {
    if (statError || !stats.isFile()) {
      return sendText(res, 404, 'Файл не найден');
    }
    const ext = path.extname(requested).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-store' : 'public, max-age=3600'
    });
    fs.createReadStream(requested).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname.startsWith('/api/')) {
      return handleApi(req, res, url.pathname);
    }
    return serveStatic(req, res, url.pathname);
  } catch (error) {
    return sendJson(res, 500, { error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`Winterfell app: http://localhost:${PORT}`);
  console.log('Admin panel: /admin');
  console.log('Admin login:', ADMIN_USER);
});
