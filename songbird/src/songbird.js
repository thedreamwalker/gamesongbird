import birdsData from './birds';

let allQuestion = [];
const currentQuestion = 0;
let currentAnswer = 0;

class Question {
  constructor(array, audio, parent) {
    this.array = array;
    this.audio = audio;
    this.parent = parent;
  }

  render() {
    const question = document.createElement('div');
    question.classList.add('question');
    question.innerHTML += `
    <div class="question__img">
          <img src="../src/assets/img/deafaltbird.jpg">
    </div>
    <div class="question__info">
      <p class="question__name">Кто это?
      </p>
      <audio class="question__audio"
      src="${this.audio}" controls></audio>
    </div>`;

    this.parent.append(question);

    const answers = document.createElement('div');
    answers.classList.add('answers');
    answers.addEventListener('click', checkAnswer);

    this.array.forEach((answer) => {
      const button = document.createElement('button');
      button.classList.add('button', 'answers__item');
      button.innerHTML = answer.name;
      answers.append(button);
    });

    this.parent.append(answers);
  }
}

class Item {
  constructor(find, array) {
    this.array = array;
    this.find = find;
  }

  render() {
    const item = document.querySelector('.item');
    this.array.forEach(bird => {
      if (bird.name === this.find) {
        item.innerHTML = `
        <div class="item__main">
          <div class="item__info">
            <p class="item__name">${bird.name} | ${bird.species}
            </p>
            <audio class="item__audio" src="${bird.audio}" controls></audio>
          </div>
        <div class="item__img">
          <img src="${bird.image}">
        </div>
      </div>
      <div class="info__text"><p>${bird.description}</p></div>`;
      }
    });
  }
}

const buildVictorinePage = () => {
  const body = document.querySelector('body');

  const layout = `
  <div class="container">
    <header class="header">
      <div class="header__logo">
        <img src="./logo.png">
      </div>
      <div class="header__menu">
        <nav>
          <ul>
            <li>Главная страница</li>
            <li>Викторина</li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <section class="game__fied">
        <div class="game__wrapper">
          <div class="question">
            <div class="question__img">
              <img>
            </div>
            <div class="question__info">
              <p class="question__name">
              </p>
              <audio class="question__audio"></audio>
            </div>
          </div>
          <div class="answers">
            <button class="button answers__item"></button>
            <button class="button answers__item"></button>
            <button class="button answers__item"></button>
            <button class="button answers__item"></button>
            <button class="button answers__item"></button>
            <button class="button answers__item"></button>
          </div>
        </div>
        <div class="item">
            <div class="item__main">
              <div class="item__info">
                <p class="item__name">
                </p>
                <audio class="item__audio"></audio>
              </div>
              <div class="item__img">
                <img>
              </div>
            </div>
            <div class="info__text"></div>
          </div>
      </section>
      <button class="button button_next">Далее</button>
    </main>
    <footer>
    Какой-то
    </footer>
  </div>
  `;

  body.innerHTML = layout;
  setGame();
  setQuestion();
};

const setGame = () => {
  const array = [];

  for (let i = 0; i < birdsData.length; i++) {
    array.push(i);
  }

  const shuffle = (array) => {
    const newArray = array;
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  };

  allQuestion = shuffle(array);
};

const setQuestion = () => {
  const gameWrapper = document.querySelector('.game__wrapper');
  gameWrapper.innerHTML = '';
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  currentAnswer = getRandomInt(allQuestion.length);

  // let [avatar, name, text, id] = [data[number - 1].avatar, data[number - 1].name, data[number - 1].text, data[number - 1].id];

  // new Testimonial(avatar, name, text, id, popUpItem).render();

  // console.log(birdsData[currentQuestion][currentAnswer].audio);

  new Question(birdsData[currentQuestion], birdsData[currentQuestion][currentAnswer].audio, gameWrapper).render();
};

const checkAnswer = (event) => {
  if (event.target.closest('.answers__item')) {
    new Item(event.target.innerHTML, birdsData[currentQuestion]).render();
  }

  if (event.target.closest('.answers__item') && event.target.innerHTML === birdsData[currentQuestion][currentAnswer].name) {
    console.log(`Поздравляю, ${event.target.innerHTML} правильный ответ`);
    event.target.classList.add('right');
    document.querySelector('.button_next').classList.add('enable');
  }
};

const changeItemBlock = () => {
  const item = `
  <div class="item__main">
    <div class="item__info">
      <p class="item__name">
      </p>
      <audio class="item__audio"></audio>
    </div>
    <div class="item__img">
      <img>
    </div>
  </div>
  <div class="info__text"></div>`;
};

buildVictorinePage();
