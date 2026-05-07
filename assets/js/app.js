const APP = {
  club: 'Винтерфелл',
  pages: [
    ['index.html', 'Главная'],
    ['about.html', 'О клубе'],
    ['squad.html', 'Состав'],
    ['matches.html', 'Матчи'],
    ['news.html', 'Новости'],
    ['gallery.html', 'Галерея'],
    ['contacts.html', 'Контакты']
  ],
  dataFiles: {
    players: 'data/players.json',
    matches: 'data/matches.json',
    news: 'data/news.json',
    gallery: 'data/gallery.json'
  }
};

const FALLBACK_DATA = {"players":[{"id":1,"name":"Илья Морозов","number":1,"position":"Вратарь","age":22,"tag":"Стартовый вратарь","image":"assets/img/players/starting_01.jpg","kit":"home-gk"},{"id":2,"name":"Артём Соколов","number":4,"position":"Защитник","age":23,"tag":"Центр обороны","image":"assets/img/players/starting_02.jpg","kit":"home"},{"id":3,"name":"Егор Фадеев","number":2,"position":"Защитник","age":21,"tag":"Правый фланг","image":"assets/img/players/starting_03.jpg","kit":"away"},{"id":4,"name":"Иван Крылов","number":5,"position":"Защитник","age":24,"tag":"Силовая борьба","image":"assets/img/players/starting_04.jpg","kit":"home"},{"id":5,"name":"Кирилл Новиков","number":3,"position":"Защитник","age":22,"tag":"Левый фланг","image":"assets/img/players/starting_05.jpg","kit":"reserve"},{"id":6,"name":"Даниил Власов","number":8,"position":"Полузащитник","age":22,"tag":"Контроль темпа","image":"assets/img/players/starting_06.jpg","kit":"away"},{"id":7,"name":"Сергей Лебедев","number":6,"position":"Полузащитник","age":25,"tag":"Опорная зона","image":"assets/img/players/starting_07.jpg","kit":"home"},{"id":8,"name":"Михаил Корнев","number":7,"position":"Полузащитник","age":23,"tag":"Связь линий","image":"assets/img/players/starting_08.jpg","kit":"home"},{"id":9,"name":"Никита Орлов","number":10,"position":"Нападающий","age":21,"tag":"Завершение атак","image":"assets/img/players/starting_09.jpg","kit":"reserve"},{"id":10,"name":"Алексей Жаров","number":11,"position":"Нападающий","age":23,"tag":"Скорость и дриблинг","image":"assets/img/players/starting_10.jpg","kit":"home"},{"id":11,"name":"Роман Северин","number":9,"position":"Нападающий","age":24,"tag":"Игра в штрафной","image":"assets/img/players/starting_11.jpg","kit":"away"},{"id":12,"name":"Максим Белов","number":12,"position":"Вратарь","age":20,"tag":"Запасной вратарь","image":"assets/img/players/bench_goalkeeper.jpg","kit":"away-gk"},{"id":13,"name":"Олег Громов","number":15,"position":"Защитник","age":22,"tag":"Надежный резерв","image":"assets/img/players/bench_02.jpg","kit":"home"},{"id":14,"name":"Павел Титов","number":18,"position":"Защитник","age":21,"tag":"Подключения по флангу","image":"assets/img/players/bench_03.jpg","kit":"away"},{"id":15,"name":"Владимир Широков","number":16,"position":"Полузащитник","age":24,"tag":"Работа между линиями","image":"assets/img/players/bench_04.jpg","kit":"reserve"},{"id":16,"name":"Андрей Ветров","number":14,"position":"Полузащитник","age":20,"tag":"Темп и прессинг","image":"assets/img/players/bench_05.jpg","kit":"home"},{"id":17,"name":"Глеб Романов","number":19,"position":"Полузащитник","age":23,"tag":"Выход из обороны","image":"assets/img/players/bench_06.jpg","kit":"away"},{"id":18,"name":"Денис Холодов","number":17,"position":"Нападающий","age":22,"tag":"Фланговая скорость","image":"assets/img/players/bench_07.jpg","kit":"reserve"},{"id":19,"name":"Матвей Ларин","number":20,"position":"Нападающий","age":21,"tag":"Свежесть в атаке","image":"assets/img/players/bench_08.jpg","kit":"home"}],"matches":[{"id":1,"date":"2026-04-16","time":"19:00","opponent":"Народная команда","venue":"Городской стадион №1","type":"Результат","result":"2:1","description":"Старт весеннего отрезка получился уверенным: команда прибавила после перерыва и довела матч до победы."},{"id":2,"date":"2026-04-23","time":"18:30","opponent":"Сатурн","venue":"Поле спортивного центра","type":"Результат","result":"1:1","description":"Равная игра с большим объемом борьбы в центре поля и высокой плотностью эпизодов у штрафной."},{"id":3,"date":"2026-04-30","time":"19:15","opponent":"Кони","venue":"Городской стадион №1","type":"Результат","result":"3:2","description":"«Винтерфелл» забрал результат в динамичном матче, проявив характер в концовке встречи."},{"id":4,"date":"2026-05-08","time":"18:45","opponent":"Торнадо","venue":"Поле спортивного центра","type":"Результат","result":"2:0","description":"Команда уверенно сработала без мяча, сохранила баланс линий и реализовала свои моменты."},{"id":5,"date":"2026-05-15","time":"19:00","opponent":"Вулкан","venue":"Городской стадион №1","type":"Результат","result":"1:2","description":"Игра прошла на высоком темпе; несмотря на поражение, команда получила важный игровой опыт."},{"id":6,"date":"2026-05-22","time":"18:30","opponent":"Гранит","venue":"Поле спортивного центра","type":"Результат","result":"4:1","description":"Одна из самых убедительных игр весеннего цикла с активным движением вперед и хорошей реализацией."},{"id":7,"date":"2026-05-29","time":"19:00","opponent":"Искра","venue":"Городской стадион №1","type":"Результат","result":"2:2","description":"Боевая ничья, в которой «Винтерфелл» дважды отыгрывался и сохранил темп до финального свистка."},{"id":8,"date":"2026-06-05","time":"19:00","opponent":"Шторм","venue":"Поле спортивного центра","type":"Предстоящий","result":"","description":"Следующая встреча посвящена проверке игровых сочетаний перед завершающим этапом сезона."},{"id":9,"date":"2026-06-10","time":"18:30","opponent":"Ротор","venue":"Городской стадион №1","type":"Предстоящий","result":"","description":"Домашний матч, в котором команда планирует закрепить игровые наработки и сохранить интенсивность."},{"id":10,"date":"2026-06-14","time":"17:30","opponent":"Маяк","venue":"Поле спортивного центра","type":"Предстоящий","result":"","description":"Заключительная июньская встреча должна подвести итог весенне-летнему отрезку клуба."}],"news":[{"id":1,"date":"2026-04-16","category":"Состав","title":"Состав на матч против «Народной команды»","excerpt":"Тренерский штаб определил стартовый состав на первый матч весеннего отрезка.","content":"Основной акцент сделан на плотную структуру в центре поля, дисциплину без мяча и быстрый выход в атаку через фланги.","image":"assets/img/news/news-lineup.jpg"},{"id":2,"date":"2026-04-30","category":"Матчи","title":"Победа над «Кони»","excerpt":"Команда одержала яркую победу в результативной встрече.","content":"«Винтерфелл» сохранял темп на протяжении всего матча и сумел дожать соперника за счет характера и хорошей реализации в решающих эпизодах.","image":"assets/img/news/news-win.jpg"},{"id":3,"date":"2026-05-29","category":"Матчи","title":"Ничья против «Искры»","excerpt":"Матч завершился боевым равенством после напряженной игры под дождём.","content":"Команда продемонстрировала устойчивость и сумела сохранить концентрацию в сложном сценарии матча, дважды возвращаясь в игру.","image":"assets/img/news/news-draw.jpg"},{"id":4,"date":"2026-05-22","category":"Медиа","title":"Интервью игрока после победы над «Гранитом»","excerpt":"После уверенного результата футболист команды подвел итоги встречи.","content":"В интервью отмечены дисциплина, правильное распределение сил по ходу матча и важность сохранения общего ритма перед июньскими играми.","image":"assets/img/news/news-interview.jpg"},{"id":5,"date":"2026-05-22","category":"Команда","title":"Даниил Власов — игрок матча!","excerpt":"Полузащитник признан лучшим после встречи с «Гранитом». ","content":"Его объем работы, продвижение мяча и участие в завершающей фазе атак стали ключевыми факторами итогового результата.","image":"assets/img/news/news-player-match.jpg"},{"id":6,"date":"2026-06-01","category":"Клуб","title":"Никита Орлов — игрок месяца!","excerpt":"Нападающий отмечен за стабильную результативность и высокий объем полезных действий.","content":"По итогам мая футболист стал одним из лидеров атакующей линии и внес весомый вклад в серию результативных матчей команды.","image":"assets/img/news/news-player-month.jpg"}],"gallery":[{"id":1,"title":"Игра на втором этаже","type":"Матч","image":"assets/img/gallery/gallery-header-duel.jpg"},{"id":2,"title":"Контратака под дождём","type":"Матч","image":"assets/img/gallery/gallery-counterattack.jpg"},{"id":3,"title":"Борьба за мяч","type":"Матч","image":"assets/img/gallery/gallery-duel-yellow.jpg"},{"id":4,"title":"Победная эмоция","type":"Команда","image":"assets/img/gallery/gallery-victory.jpg"},{"id":5,"title":"Дриблинг против красных","type":"Матч","image":"assets/img/gallery/gallery-dribble-red.jpg"},{"id":6,"title":"Выход на ударную позицию","type":"Матч","image":"assets/img/gallery/gallery-shot.jpg"},{"id":7,"title":"Тренировка под прожекторами","type":"Тренировка","image":"assets/img/gallery/gallery-training.jpg"},{"id":8,"title":"Выход команды на поле","type":"Команда","image":"assets/img/gallery/gallery-walkout.jpg"},{"id":9,"title":"Вратарский сейв","type":"Матч","image":"assets/img/gallery/gallery-goalkeeper-save.jpg"},{"id":10,"title":"Прыжок за мячом","type":"Матч","image":"assets/img/gallery/gallery-save.jpg"}]};
const STORAGE_PREFIX = 'winterfell_v7_secure_final';
const COLLECTIONS = Object.keys(APP.dataFiles);

const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[char]));

const clone = (value) => JSON.parse(JSON.stringify(value));

const store = {
  defaults: clone(FALLBACK_DATA),
  baseline: clone(FALLBACK_DATA),
  remote: false,
  modeLabel: 'локальное сохранение в браузере',
  async init() {
    if (window.location.protocol !== 'file:') {
      const apiData = {};
      let apiLoaded = true;
      for (const key of COLLECTIONS) {
        try {
          const response = await fetch(`api/data/${key}`, { cache: 'no-store' });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const payload = await response.json();
          if (!Array.isArray(payload)) throw new Error('Ответ API должен быть массивом');
          apiData[key] = payload;
        } catch (error) {
          apiLoaded = false;
          break;
        }
      }
      if (apiLoaded) {
        this.defaults = clone(apiData);
        this.baseline = clone(apiData);
        this.remote = true;
        this.modeLabel = 'серверное сохранение в JSON-файлы';
        return;
      }

      await Promise.all(Object.entries(APP.dataFiles).map(async ([key, path]) => {
        try {
          const response = await fetch(path, { cache: 'no-store' });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const payload = await response.json();
          if (Array.isArray(payload)) this.defaults[key] = payload;
        } catch (error) {
          console.warn(`Не удалось загрузить ${path}, используются встроенные данные.`, error);
        }
      }));
      this.baseline = clone(this.defaults);
    }
  },
  get(key) {
    if (this.remote) return clone(this.defaults[key] || []);
    const local = localStorage.getItem(`${STORAGE_PREFIX}_${key}`);
    if (local) {
      try {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed)) return parsed;
      } catch (error) {
        console.warn('Повреждённые локальные данные были пропущены.', error);
      }
    }
    return clone(this.defaults[key] || []);
  },
  async set(key, value) {
    const normalized = Array.isArray(value) ? value : [];
    if (this.remote) {
      const saved = await this.saveRemote(key, normalized);
      this.defaults[key] = clone(saved);
      return saved;
    }
    localStorage.setItem(`${STORAGE_PREFIX}_${key}`, JSON.stringify(normalized));
    return normalized;
  },
  async saveRemote(key, value) {
    const post = async (token = '') => fetch(`api/data/${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'X-Admin-Token': token } : {})
      },
      body: JSON.stringify(value)
    });

    const token = localStorage.getItem(`${STORAGE_PREFIX}_admin_token`) || '';
    const response = await post(token);
    if (response.status === 401) {
      localStorage.removeItem(`${STORAGE_PREFIX}_admin_token`);
      showAdminLogin?.('Сессия администратора истекла. Войдите заново.');
      throw new Error('Сохранение отменено: нужна авторизация администратора.');
    }
    if (!response.ok) throw new Error(`Ошибка сохранения: HTTP ${response.status}`);
    return response.json();
  },
  async reset(key) {
    if (this.remote) return this.set(key, clone(this.baseline[key] || []));
    localStorage.removeItem(`${STORAGE_PREFIX}_${key}`);
    return this.get(key);
  },
  exportAll() {
    return Object.fromEntries(COLLECTIONS.map((key) => [key, this.get(key)]));
  },
  async importAll(data) {
    for (const key of COLLECTIONS) {
      if (Array.isArray(data[key])) await this.set(key, data[key]);
    }
  }
};

function renderShell() {
  const page = document.body.dataset.page || 'index.html';
  const headerTarget = document.getElementById('site-header');
  const footerTarget = document.getElementById('site-footer');
  const navItems = APP.pages;

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="site-header">
        <div class="inner">
          <a class="logo" href="index.html" aria-label="На главную">
            <span class="logo-badge"><img src="assets/img/logo-winterfell.png" alt="Эмблема клуба"></span>
            <span class="logo-copy"><strong>${APP.club}</strong></span>
          </a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Открыть меню">☰</button>
          <nav class="main-nav" id="main-nav">
            ${navItems.map(([href, label]) => `<a href="${href}" class="${href === page ? 'active' : ''}">${label}</a>`).join('')}
          </nav>
          ${page === 'admin.html' ? '<a class="header-cta" href="index.html">К сайту</a>' : '<a class="header-cta" href="matches.html">Матчи</a>'}
        </div>
      </header>`;
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="footer">
        <div class="inner">
          <div>© 2026 ${APP.club}</div>
        </div>
      </footer>`;
  }
}

function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }
}

function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return escapeHTML(dateString);
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function groupPlayers(players) {
  const order = ['Вратарь', 'Защитник', 'Полузащитник', 'Нападающий'];
  return order.map((position) => ({ position, items: players.filter((p) => p.position === position) })).filter((g) => g.items.length);
}

function kitBadgeClass(kit) {
  if (String(kit).includes('reserve')) return 'badge teal';
  if (String(kit).includes('away')) return 'badge';
  return 'tag';
}

function opponentMarkMarkup(opponent) {
  if (opponent === 'Шторм') {
    return '<div class="club-mark alt"><img src="assets/img/storm-logo.png" alt="Шторм"></div>';
  }
  return '<div class="club-mark alt">VS</div>';
}

function renderHome() {
  const news = store.get('news').slice(0, 3);
  const players = store.get('players').slice(0, 4);
  const nextMatch = store.get('matches').find((m) => m.type === 'Предстоящий');
  const homeNews = document.getElementById('home-news');
  const homePlayers = document.getElementById('home-players');
  const homeMatch = document.getElementById('home-match');

  if (homeMatch && nextMatch) {
    homeMatch.innerHTML = `
      <div class="club-side">
        <div class="club-mark"><img src="assets/img/logo-winterfell.png" alt="${APP.club}"></div>
        <div><strong>${APP.club}</strong><p>домашняя сторона</p></div>
      </div>
      <div class="match-center">
        <span class="eyebrow">${formatDate(nextMatch.date)} • ${escapeHTML(nextMatch.time)}</span>
        <strong>VS</strong>
        <p>${escapeHTML(nextMatch.venue)}</p>
      </div>
      <div class="club-side reverse">
        <div><strong>${escapeHTML(nextMatch.opponent)}</strong><p>${escapeHTML(nextMatch.description)}</p></div>
        ${opponentMarkMarkup(nextMatch.opponent)}
      </div>`;
  }

  if (homeNews) {
    homeNews.innerHTML = news.map((item) => `
      <article class="card news-card reveal">
        <div class="news-media"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}"></div>
        <div class="card-body">
          <span class="eyebrow">${escapeHTML(item.category)}</span>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.excerpt)}</p>
        </div>
      </article>`).join('');
  }

  if (homePlayers) {
    homePlayers.innerHTML = players.map((player) => `
      <article class="card player-card reveal">
        <div class="player-media"><img src="${escapeHTML(player.image)}" alt="${escapeHTML(player.name)}"><div class="media-overlay">№${escapeHTML(player.number)} • ${escapeHTML(player.position)}</div></div>
        <div class="card-body">
          <h3>${escapeHTML(player.name)}</h3>
          <p>${escapeHTML(player.tag)}</p>
        </div>
      </article>`).join('');
  }
}

function renderSquad() {
  const target = document.getElementById('squad-groups');
  if (!target) return;
  const groups = groupPlayers(store.get('players'));
  target.innerHTML = groups.map((group) => `
    <section class="section compact reveal">
      <div class="section-head">
        <div>
          <span class="eyebrow">${escapeHTML(group.position)}</span>
          <h2>${group.position === 'Вратарь' ? 'Вратарская линия' : group.position === 'Защитник' ? 'Линия обороны' : group.position === 'Полузащитник' ? 'Центральный блок' : 'Группа атаки'}</h2>
        </div>
      </div>
      <div class="player-list">
        ${group.items.map((player) => `
          <article class="card player-card">
            <div class="player-media"><img src="${escapeHTML(player.image)}" alt="${escapeHTML(player.name)}"><div class="media-overlay">№${escapeHTML(player.number)}</div></div>
            <div class="card-body">
              <span class="${kitBadgeClass(player.kit)}">${escapeHTML(player.position)}</span>
              <h3>${escapeHTML(player.name)}</h3>
              <p>${escapeHTML(player.age)} года • ${escapeHTML(player.tag)}</p>
            </div>
          </article>`).join('')}
      </div>
    </section>`).join('');
}

function renderMatches() {
  const listUpcoming = document.getElementById('matches-upcoming');
  const listResults = document.getElementById('matches-results');
  if (!listUpcoming && !listResults) return;
  const matches = store.get('matches');
  const upcoming = matches.filter((m) => m.type === 'Предстоящий');
  const results = matches.filter((m) => m.type === 'Результат');

  if (listUpcoming) {
    listUpcoming.innerHTML = upcoming.length ? upcoming.map((m) => `
      <article class="card match-card reveal">
        <h3>${APP.club} — ${escapeHTML(m.opponent)}</h3>
        <p>${formatDate(m.date)} • ${escapeHTML(m.time)}</p>
        <p>${escapeHTML(m.venue)}</p>
        <p>${escapeHTML(m.description)}</p>
      </article>`).join('') : '<div class="empty-state">Предстоящие матчи пока не добавлены.</div>';
  }

  if (listResults) {
    listResults.innerHTML = results.length ? `
      <div class="panel reveal">
        <table class="data-table">
          <thead><tr><th>Дата</th><th>Матч</th><th>Счёт</th><th>Комментарий</th></tr></thead>
          <tbody>
            ${results.map((m) => `<tr><td>${formatDate(m.date)}</td><td>${APP.club} — ${escapeHTML(m.opponent)}</td><td>${escapeHTML(m.result)}</td><td>${escapeHTML(m.description)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>` : '<div class="empty-state">Результаты пока не добавлены.</div>';
  }
}

function renderNews() {
  const list = document.getElementById('news-list');
  if (!list) return;
  const news = store.get('news');
  list.innerHTML = news.map((item) => `
    <article class="card news-card reveal">
      <div class="news-media"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}"></div>
      <div class="card-body">
        <span class="eyebrow">${escapeHTML(item.category)} • ${formatDate(item.date)}</span>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.excerpt)}</p>
        <div class="form-actions"><button class="button button-secondary" data-news-open="${escapeHTML(item.id)}">Подробнее</button></div>
        <div class="detail-panel" id="news-detail-${escapeHTML(item.id)}" hidden><p>${escapeHTML(item.content)}</p></div>
      </div>
    </article>`).join('');

  list.querySelectorAll('[data-news-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const detail = document.getElementById(`news-detail-${button.dataset.newsOpen}`);
      if (!detail) return;
      const hidden = detail.hasAttribute('hidden');
      detail.toggleAttribute('hidden');
      button.textContent = hidden ? 'Скрыть' : 'Подробнее';
    });
  });
}

function renderGallery() {
  const list = document.getElementById('gallery-list');
  if (!list) return;
  const items = store.get('gallery');
  list.innerHTML = items.map((item) => `
    <article class="card gallery-card reveal">
      <div class="gallery-media"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}"></div>
      <div class="card-body">
        <span class="eyebrow">${escapeHTML(item.type)}</span>
        <h3>${escapeHTML(item.title)}</h3>
      </div>
    </article>`).join('');
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = document.getElementById('contact-message');
    const submit = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      if (submit) submit.disabled = true;
      if (window.location.protocol === 'file:') {
        throw new Error('Форма работает после запуска сайта через сервер.');
      }
      const response = await fetch('api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Сообщение не удалось отправить');
      message.textContent = 'Сообщение отправлено. Мы свяжемся с вами в ближайшее время.';
      message.className = 'form-message';
      form.reset();
    } catch (error) {
      message.textContent = error.message;
      message.className = 'form-message error';
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}

function normalizeField(field, value) {
  if (field.type === 'number') return Number(value);
  return value;
}

function createAdminManager({ key, fields, targetId, titleField }) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const listTarget = target.querySelector('.admin-list');
  const form = target.querySelector('form');
  const resetBtn = target.querySelector('[data-reset]');
  const message = target.querySelector('.admin-message');
  let editingId = null;

  const setMessage = (text, isError = false) => {
    if (!message) return;
    message.textContent = text;
    message.className = `form-message admin-message${isError ? ' error' : ''}`;
    message.hidden = false;
  };

  const render = () => {
    const items = store.get(key);
    if (!items.length) {
      listTarget.innerHTML = '<div class="empty-state">Записей пока нет.</div>';
      return;
    }
    listTarget.innerHTML = items.map((item) => `
      <div class="admin-item">
        <div>
          <strong>${escapeHTML(item[titleField])}</strong>
          <p>${Object.entries(item).filter(([field]) => !['id', titleField, 'content', 'image'].includes(field)).slice(0, 3).map(([, value]) => escapeHTML(value)).join(' • ')}</p>
        </div>
        <div class="admin-actions">
          <button type="button" class="small-btn" data-edit="${escapeHTML(item.id)}">Изменить</button>
          <button type="button" class="small-btn danger" data-delete="${escapeHTML(item.id)}">Удалить</button>
        </div>
      </div>`).join('');

    listTarget.querySelectorAll('[data-edit]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = store.get(key).find((entry) => String(entry.id) === btn.dataset.edit);
        if (!item) return;
        fields.forEach((field) => {
          const input = form.elements[field.name];
          if (input) input.value = item[field.name] ?? '';
        });
        editingId = item.id;
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    listTarget.querySelectorAll('[data-delete]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          const updated = store.get(key).filter((entry) => String(entry.id) !== btn.dataset.delete);
          await store.set(key, updated);
          render();
          setMessage('Запись удалена. Изменения сохранены.');
          updateAdminStatus();
        } catch (error) {
          setMessage(error.message, true);
        }
      });
    });
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const items = store.get(key);
    const formData = new FormData(form);
    const payload = {};
    fields.forEach((field) => {
      payload[field.name] = normalizeField(field, formData.get(field.name));
    });
    try {
      if (editingId) {
        const index = items.findIndex((entry) => entry.id === editingId);
        if (index >= 0) items[index] = { ...items[index], ...payload, id: editingId };
      } else {
        items.unshift({ ...payload, id: Date.now() });
      }
      await store.set(key, items);
      editingId = null;
      form.reset();
      render();
      setMessage('Данные сохранены. Изменения будут видны на страницах сайта.');
      updateAdminStatus();
    } catch (error) {
      setMessage(error.message, true);
    }
  });

  resetBtn?.addEventListener('click', async () => {
    try {
      await store.reset(key);
      editingId = null;
      form.reset();
      render();
      setMessage('Раздел сброшен к исходным данным.');
      updateAdminStatus();
    } catch (error) {
      setMessage(error.message, true);
    }
  });

  render();
}

function updateAdminStatus() {
  const status = document.getElementById('admin-status');
  if (!status) return;
  status.innerHTML = store.remote
    ? '<span class="admin-mode-badge is-live">Серверный режим</span>'
    : '<span class="admin-mode-badge">Локальный режим</span>';
}

function initAdminTools() {
  updateAdminStatus();
  const exportBtn = document.getElementById('admin-export');
  const importBtn = document.getElementById('admin-import');
  const importArea = document.getElementById('admin-import-area');
  const toolsMessage = document.getElementById('admin-tools-message');

  const showToolsMessage = (text, isError = false) => {
    if (!toolsMessage) return;
    toolsMessage.textContent = text;
    toolsMessage.className = `form-message${isError ? ' error' : ''}`;
    toolsMessage.hidden = false;
  };

  exportBtn?.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(store.exportAll(), null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'winterfell-content-backup.json';
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToolsMessage('Резервная копия данных подготовлена и скачана.');
  });

  importBtn?.addEventListener('click', async () => {
    try {
      const payload = JSON.parse(importArea.value || '{}');
      await store.importAll(payload);
      showToolsMessage('Данные импортированы. Обновите страницы сайта, если они уже открыты в соседних вкладках.');
      updateAdminStatus();
    } catch (error) {
      showToolsMessage('Не удалось импортировать JSON: ' + error.message, true);
    }
  });
}


function adminToken() {
  return localStorage.getItem(`${STORAGE_PREFIX}_admin_token`) || '';
}

async function checkAdminAuth() {
  if (!store.remote) return false;
  const token = adminToken();
  if (!token) return false;
  try {
    const response = await fetch('api/auth/check', {
      cache: 'no-store',
      headers: { 'X-Admin-Token': token }
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

function showAdminLogin(message = '') {
  const loginSection = document.getElementById('admin-login-section');
  const shell = document.getElementById('admin-shell');
  const messageTarget = document.getElementById('admin-login-message');
  if (loginSection) loginSection.hidden = false;
  if (shell) shell.hidden = true;
  if (messageTarget && message) {
    messageTarget.textContent = message;
    messageTarget.className = 'form-message error';
    messageTarget.hidden = false;
  }
}

function showAdminPanel() {
  const loginSection = document.getElementById('admin-login-section');
  const shell = document.getElementById('admin-shell');
  if (loginSection) loginSection.hidden = true;
  if (shell) shell.hidden = false;
}

function initAdminLogin(onSuccess) {
  const form = document.getElementById('admin-login-form');
  const logout = document.getElementById('admin-logout');
  const message = document.getElementById('admin-login-message');

  logout?.addEventListener('click', async () => {
    const token = adminToken();
    localStorage.removeItem(`${STORAGE_PREFIX}_admin_token`);
    if (store.remote && token) {
      try {
        await fetch('api/auth/logout', { method: 'POST', headers: { 'X-Admin-Token': token } });
      } catch (error) {}
    }
    showAdminLogin('Вы вышли из админ-панели.');
  });

  if (!form) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!store.remote) {
      if (message) {
        message.textContent = 'Для защищённого входа запустите проект через сервер: npm start';
        message.className = 'form-message error';
        message.hidden = false;
      }
      return;
    }
    const formData = new FormData(form);
    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          login: formData.get('login'),
          password: formData.get('password')
        })
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.token) throw new Error(payload.error || 'Не удалось войти');
      localStorage.setItem(`${STORAGE_PREFIX}_admin_token`, payload.token);
      form.reset();
      if (message) message.hidden = true;
      showAdminPanel();
      onSuccess?.();
    } catch (error) {
      if (message) {
        message.textContent = error.message;
        message.className = 'form-message error';
        message.hidden = false;
      }
    }
  });
}


function formatMessageDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return escapeHTML(dateString || '');
  return date.toLocaleString('ru-RU', {
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
}

async function fetchAdminMessages() {
  const response = await fetch('api/data/messages', {
    cache: 'no-store',
    headers: { 'X-Admin-Token': adminToken() }
  });
  const payload = await response.json().catch(() => ([]));
  if (!response.ok) throw new Error(payload.error || 'Не удалось загрузить сообщения');
  return Array.isArray(payload) ? payload : [];
}

async function saveAdminMessages(messages) {
  const response = await fetch('api/data/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Admin-Token': adminToken()
    },
    body: JSON.stringify(messages)
  });
  const payload = await response.json().catch(() => ([]));
  if (!response.ok) throw new Error(payload.error || 'Не удалось сохранить сообщения');
  return Array.isArray(payload) ? payload : [];
}

function initAdminMessages() {
  const list = document.getElementById('admin-messages-list');
  if (!list) return;
  const messageBox = document.getElementById('admin-messages-message');
  const refreshBtn = document.getElementById('admin-refresh-messages');
  const markReadBtn = document.getElementById('admin-mark-messages-read');
  let messages = [];

  const setMessage = (text, isError = false) => {
    if (!messageBox) return;
    messageBox.textContent = text;
    messageBox.className = `form-message admin-message${isError ? ' error' : ''}`;
    messageBox.hidden = false;
  };

  const render = () => {
    if (!messages.length) {
      list.innerHTML = '<div class="empty-state">Сообщений пока нет.</div>';
      return;
    }
    list.innerHTML = messages.map((item) => `
      <article class="admin-item admin-message-item ${item.status === 'new' ? 'is-new' : ''}">
        <div>
          <div class="message-headline">
            <strong>${escapeHTML(item.subject)}</strong>
            ${item.status === 'new' ? '<span class="badge teal">Новое</span>' : '<span class="badge">Прочитано</span>'}
          </div>
          <p>${formatMessageDate(item.date)} • ${escapeHTML(item.name)} • <a href="mailto:${escapeHTML(item.email)}">${escapeHTML(item.email)}</a></p>
          <p class="message-text">${escapeHTML(item.message)}</p>
        </div>
        <div class="admin-actions">
          <button type="button" class="small-btn" data-read="${escapeHTML(item.id)}">Прочитано</button>
          <button type="button" class="small-btn danger" data-delete="${escapeHTML(item.id)}">Удалить</button>
        </div>
      </article>`).join('');

    list.querySelectorAll('[data-read]').forEach((button) => {
      button.addEventListener('click', async () => {
        try {
          messages = messages.map((item) => String(item.id) === button.dataset.read ? { ...item, status: 'read' } : item);
          messages = await saveAdminMessages(messages);
          render();
          setMessage('Сообщение отмечено как прочитанное.');
        } catch (error) {
          setMessage(error.message, true);
        }
      });
    });

    list.querySelectorAll('[data-delete]').forEach((button) => {
      button.addEventListener('click', async () => {
        try {
          messages = messages.filter((item) => String(item.id) !== button.dataset.delete);
          messages = await saveAdminMessages(messages);
          render();
          setMessage('Сообщение удалено.');
        } catch (error) {
          setMessage(error.message, true);
        }
      });
    });
  };

  const load = async () => {
    try {
      messages = await fetchAdminMessages();
      render();
    } catch (error) {
      setMessage(error.message, true);
    }
  };

  refreshBtn?.addEventListener('click', load);
  markReadBtn?.addEventListener('click', async () => {
    try {
      messages = messages.map((item) => ({ ...item, status: 'read' }));
      messages = await saveAdminMessages(messages);
      render();
      setMessage('Все сообщения отмечены как прочитанные.');
    } catch (error) {
      setMessage(error.message, true);
    }
  });

  load();
}

async function initAdmin() {
  const shell = document.getElementById('admin-shell');
  if (!shell) return;
  let initialized = false;
  const startManagers = () => {
    if (initialized) return;
    initialized = true;
    const buttons = shell.querySelectorAll('.admin-nav button');
    const panels = shell.querySelectorAll('[data-panel]');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.toggle('active', b === button));
        panels.forEach((panel) => panel.hidden = panel.dataset.panel !== button.dataset.target);
      });
    });

    createAdminManager({
    key: 'players',
    targetId: 'admin-players',
    titleField: 'name',
    fields: [
      { name: 'name' }, { name: 'number', type: 'number' }, { name: 'position' }, { name: 'age', type: 'number' }, { name: 'tag' }, { name: 'image' }, { name: 'kit' }
    ]
  });
  createAdminManager({
    key: 'matches',
    targetId: 'admin-matches',
    titleField: 'opponent',
    fields: [
      { name: 'date' }, { name: 'time' }, { name: 'opponent' }, { name: 'venue' }, { name: 'type' }, { name: 'result' }, { name: 'description' }
    ]
  });
  createAdminManager({
    key: 'news',
    targetId: 'admin-news',
    titleField: 'title',
    fields: [
      { name: 'date' }, { name: 'category' }, { name: 'title' }, { name: 'excerpt' }, { name: 'content' }, { name: 'image' }
    ]
  });
  createAdminManager({
    key: 'gallery',
    targetId: 'admin-gallery',
    titleField: 'title',
    fields: [
      { name: 'title' }, { name: 'type' }, { name: 'image' }
    ]
  });
    initAdminMessages();
    initAdminTools();
  };

  initAdminLogin(startManagers);
  const authorized = await checkAdminAuth();
  if (authorized) {
    showAdminPanel();
    startManagers();
  } else {
    showAdminLogin();
  }
}

async function initPage() {
  renderShell();
  initNavigation();
  renderHome();
  renderSquad();
  renderMatches();
  renderNews();
  renderGallery();
  initContactForm();
  await initAdmin();
  initReveal();
}

window.addEventListener('DOMContentLoaded', async () => {
  try {
    await store.init();
  } catch (error) {
    console.warn('Инициализация данных завершилась с ошибкой, используются встроенные данные.', error);
  }
  initPage();
});
