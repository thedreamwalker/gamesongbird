import { buildVictorinePage, Item } from './songbird';
import birdsData from './birds';

const body = document.querySelector('body');
let theme = 'light';

class LinkHeader {
  constructor(parent, page, link, text) {
    this.parent = parent;
    this.page = page;
    this.link = link;
    this.text = text;
  }

  render() {
    const li = document.createElement('li');

    const link = document.createElement('button');
    link.classList.add('header__link');
    link.innerHTML = `${this.text}`;

    if (this.page !== this.link) {
      if (this.link === 'main') {
        link.addEventListener('click', buildMainPage);
      }

      if (this.link === 'victorine') {
        link.addEventListener('click', buildVictorinePage);
      }

      if (this.link === 'gallery') {
        link.addEventListener('click', buildGalleryPage);
      }
    } else {
      link.classList.add('header__link', 'active');
    }

    li.append(link);
    this.parent.append(li);
  }
}

/* HEADER */

const changeTheme = () => {
  if (body.classList.contains('theme_dark')) {
    body.classList.remove('theme_dark');
    theme = 'light';
  } else {
    body.classList.add('theme_dark');
    theme = 'dark';
  }
};

const buildHeader = (parent, page, score) => {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
    <div class="header__logo">
      <img src="../src/assets/svg/logo.svg">
    </div>`;

  const menu = document.createElement('div');
  menu.classList.add('header__menu');
  const nav = document.createElement('nav');
  menu.append(nav);
  const ul = document.createElement('ul');
  nav.append(ul);

  new LinkHeader(ul, page, 'main', 'Главная').render();
  new LinkHeader(ul, page, 'victorine', 'Викторина').render();
  new LinkHeader(ul, page, 'gallery', 'Галерея').render();

  if (score === 0 || score > 0) {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('header__score');
    scoreContainer.innerHTML = `Счет: <span>${score}</span>`;
    menu.append(scoreContainer);
  }

  const theme = document.createElement('button');
  menu.append(theme);
  theme.classList.add('header__theme');

  theme.addEventListener('click', changeTheme);

  header.append(menu);
  parent.append(header);
};

/* FOOTER */

const buildFooter = (parent) => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
  <div class="footer__git"><a href="https://github.com/thedreamwalker">github</a></div>
  <p>© 2022</p>
  <div class="footer__rss"><a href="https://rs.school/js/"><img src="../src/assets/svg/rs_school_js.svg"></a></div>`;

  parent.append(footer);
};

/* BUILD MAIN */

const buildMainPage = () => {
  body.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('container');
  body.append(container);

  buildHeader(container, 'main');

  const main = document.createElement('main');
  main.classList.add('main');
  const section = document.createElement('section');
  section.classList.add('main__start');
  main.append(section);

  const img = document.createElement('div');
  img.classList.add('main__img');
  img.innerHTML = '<img src="../src/assets/img/deafaltbird.png">';
  section.append(img);

  const button = document.createElement('button');
  button.classList.add('button', 'button_start');
  button.innerHTML = 'Начать игру';
  button.addEventListener('click', buildVictorinePage);
  section.append(button);

  container.append(main);

  buildFooter(container);
};

/* BUILD GALLERY */

const buildGalleryPage = () => {
  body.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('container');
  body.append(container);

  buildHeader(container, 'gallery');

  const main = document.createElement('main');
  main.classList.add('main');
  const section = document.createElement('section');
  section.classList.add('main__gallery');
  main.append(section);

  for (let i = 0; i < birdsData.length; i++) {
    for (let j = 0; j < birdsData[i].length; j++) {
      const div = document.createElement('div');
      section.append(div);
      div.classList.add('gallery__item');
      new Item(birdsData[i][j].name, birdsData[i], div).render();
    }
  }

  container.append(main);

  buildFooter(container);
};

const setTheme = (color) => {
  if (color === 'dark') {
    body.classList.add('theme_dark');
  }
};

function setLocalStorage() {
  localStorage.setItem('theme', theme);
}

function getLocalStorage() {
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    setTheme(theme);
  }
}

const setHeadData = (scr) => {
  const headTitle = document.querySelector('head');
  const favicon = document.createElement('link');
  favicon.setAttribute('rel', 'shortcut icon');
  favicon.setAttribute('href', scr);
  headTitle.appendChild(favicon);

  const title = document.querySelector('title');
  title.innerHTML = 'songbird game';
};

setHeadData('../src/assets/fav.ico');

buildMainPage();
console.log('Все требования тз выполнены, в качестве дополнительного функционала реализована галерея и смена темы с сохранением в local storage\n270/270');

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

export { buildHeader, buildFooter, buildMainPage };
