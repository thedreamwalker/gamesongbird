import { buildVictorinePage } from './songbird';
const body = document.querySelector('body');

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
      console.log(this.page);
      console.log(this.link);
      if (this.link === 'main') {
        link.addEventListener('click', buildMainPage);
      }

      if (this.link === 'victorine') {
        link.addEventListener('click', buildVictorinePage);
      }
      
    } else {
      link.classList.add('header__link', 'active');
    }

    li.append(link);
    this.parent.append(li);
  }
}

/* HEADER */

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
  new LinkHeader(ul, page, 'galery', 'Галерея').render();

  if (score === 0 || score > 0) {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('header__score');
    scoreContainer.innerHTML = `Счет: <span>${score}</span>`;
    menu.append(scoreContainer);
  }

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
  <div class="footer__rss"><img src="../src/assets/svg/rs_school_js.svg"></div>`;

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
  img.innerHTML = `<img src="../src/assets/img/deafaltbird.jpg">`;
  section.append(img);

  const button = document.createElement('button');
  button.classList.add('button', 'button_start');
  button.innerHTML = 'Начать игру';
  button.addEventListener('click', buildVictorinePage);
  section.append(button);

  container.append(main);

  buildFooter(container);
};



buildMainPage();

export {buildHeader, buildFooter, buildMainPage};