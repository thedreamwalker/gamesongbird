import birdsData from './birds';

let allQuestion = [];
let currentQuestion = 0;
let currentAnswer = 0;
let score = 0;

class Question {
  constructor(array, audio, parent) {
    this.array = array;
    this.audio = audio;
    this.parent = parent;
  }

  async render() {
    const question = document.createElement('div');
    question.classList.add('question');
    
    question.innerHTML += `
    <div class="question__title">
      <p>Кто это?</p>
      <p class="question__name">***</p>
    </div>
    <div class="question__img">
          <img src="../src/assets/img/deafaltbird.jpg">
    </div>`;

    this.parent.append(question);

    new Player(this.audio, question).render('Question');

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
  constructor(selected, array) {
    this.array = array;
    this.selected = selected;
  }

  async render() {
    const item = document.querySelector('.item');
    this.array.forEach(bird => {
      if (bird.name === this.selected) {
        item.innerHTML = `
        <div class="item__main">
          <div class="item__info">
            <p class="item__name">${bird.name} | ${bird.species}
            </p>
          </div>
        <div class="item__img">
          <img src="${bird.image}">
        </div>
      </div>
      <div class="item__text"><p>${bird.description}</p></div>`;

    const player = document.createElement('div');
    player.classList.add('player');

    new Player(bird.audio, player).render();
    document.querySelector('.item__info').append(player);
      }
    });
  }
}

class Player {
  constructor(url, parent) {
    this.url = url;
    this.parent = parent;
  }

  async render(question) {
    const audio = await new Audio(this.url);
    audio.volume = 0.75;
    this.parent.append(audio);

    const div = document.createElement('div');
    if (question) {
      div.classList.add('player');
      div.innerHTML = `
      <audio class="player__audio" preload='metadata'
        src="${this.url}" type="audio/mpeg"></audio>
      <div class="player__progress">
        <div class="player__progressbar"><button class="player__progress-toggle" aria-label="Текущее время"></button></div>
      </div>
      <div class="player__time">
        <div class="player__time_current">0:00</div>
        <div class="player__time_duration"></div>
      </div>
      <button class="control__volume"><img src="../src/assets/svg/volume.svg" alt="Регулировка громкости">
        <div class="control__volume_progress">
          <div class="control__volume_progressbar"></div>
        </div>
      </button>`;
    } else {
      div.classList.add('player__wrapper');
      div.innerHTML = `
      <div class="player__track">
        <div class="player__progress">
          <div class="player__progressbar"><button class="player__progress-toggle" aria-label="Текущее время"></button></div>
        </div>
        <div class="player__time">
          <div class="player__time_current">0:00</div>
          <div class="player__time_duration"></div>
        </div>
        <button class="control__volume"><img src="../src/assets/svg/volume.svg" alt="Регулировка громкости">
        <div class="control__volume_progress">
          <div class="control__volume_progressbar"></div>
        </div>
        </button>
      </div>`;
    }

    this.parent.append(div);

    const audioButton = document.createElement('button');
    audioButton.classList.add('control__switcher', 'control__switcher_play');
    audioButton.addEventListener('click', event => {
      playAudio(event, audio, div);
    });
    div.prepend(audioButton);

    // change volume 
    div.querySelector('.control__volume_progress').addEventListener('click', e => {
      const sliderWidth = window.getComputedStyle(div.querySelector('.control__volume_progress')).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      div.querySelector(".control__volume_progressbar").style.width = newVolume * 100 + '%';
    }, false);
  
    // set duration
    audio.onloadedmetadata = () => {
      div.querySelector('.player__time_duration').innerHTML = formatTime(audio.duration);};
    

      // change timeline 
    const timeline = div.querySelector(".player__progress");
    timeline.addEventListener("click", e => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
      audio.currentTime = timeToSeek;
      div.querySelector('.player__time_current').textContent = formatTime(audio.currentTime);
      div.querySelector('.player__progressbar').style.width = `${(audio.currentTime / audio.duration) * 100}%`;
  }, false);
  }
}

const buildVictorinePage = () => {
  currentQuestion = 0;
  score = 0;
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
            <li>Галерея</li>
          </ul>
        </nav>
        <div class="header__score">Счет: <span>${score}</span></div>
      </div>
    </header>
    <main class="main">
      <section class="game__fied">
        <div class="game__wrapper">
          <div class="question">
            <div class="question__title">
              <p>Кто это?</p>
              <p class="question__name">???</p>
            </div>
            <div class="question__img">
              <img>
            </div>
            <div class="question__info">
              <audio class="player__audio"></audio>
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
          Прослушайте запись и выберете птицу
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

const buildResultePage = () => {
  let description;
  if (score >= 30) {
    description = `Вот это результат, так вообще возможно?`;
  } else if (score > 20) {
    description = `Отличный результат, в птицах ты разбираешься!`;
  } else {
    description = `Неплохо, но ты точно можешь лучше :)`;
  }

  const resulte = document.createElement('section');
  resulte.classList.add('game__resulte');

  resulte.innerHTML = `
  <h2>Поздравляем!</h2>
    <h3>Ваш счет: ${score}</h3>
    <p>${description}</p>
  `;

  const buttons = document.createElement('div');
  buttons.classList.add('game__buttons');
  resulte.append(buttons);


  const buttonMain = document.createElement('button');
  buttonMain.classList.add('button', 'button_next');
  buttonMain.innerHTML = 'На главную';
  //buttonMain.addEventListener('click', buildMainPage);
  buttons.append(buttonMain);

  const buttonVictorine = document.createElement('button');
  buttonVictorine.classList.add('button', 'button_next');
  buttonVictorine.innerHTML = 'Начать заново';
  buttonVictorine.addEventListener('click', buildVictorinePage);
  buttons.append(buttonVictorine);

  document.querySelector('.main').innerHTML = '';
  document.querySelector('.main').append(resulte);
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

  new Question(birdsData[currentQuestion], birdsData[currentQuestion][currentAnswer].audio, gameWrapper).render();
};

const checkAnswer = (event) => {
  if (event.target.closest('.answers__item')) {
    new Item(event.target.innerHTML, birdsData[currentQuestion]).render();

    if (event.target.innerHTML !== birdsData[currentQuestion][currentAnswer].name && score > 0 && document.querySelector('.question__name').innerHTML === '***') {
      score -= 1;
      document.querySelector('.header__score span').innerHTML = score;
    }
  }

  if (event.target.closest('.answers__item') && event.target.innerHTML === birdsData[currentQuestion][currentAnswer].name && document.querySelector('.question__name').innerHTML === '***') {
    document.querySelector('.question__name').innerHTML = `${birdsData[currentQuestion][currentAnswer].name} [${birdsData[currentQuestion][currentAnswer].species}]`;
    document.querySelector('.question__img').innerHTML = `<img src="${birdsData[currentQuestion][currentAnswer].image}">`;
    console.log(`Поздравляю, ${event.target.innerHTML} правильный ответ`);
    event.target.classList.add('right');
    score += 5;
    document.querySelector('.header__score span').innerHTML = score;

    const buttonNext = document.querySelector('.button_next');
    buttonNext.classList.add('enable');
    buttonNext.addEventListener('click', changeQuestion);
  }
};

const playAudio = async (event, audio, div) => {
  
  if (event.target.classList.contains('control__switcher_pause')) {
  await audio.pause();
  event.target.classList.remove('control__switcher_pause');
  } else {
    await audio.play();
    event.target.classList.add('control__switcher_pause');
    audio.addEventListener('timeupdate', event => {
      updateProgress(event, audio, div);
    });
  }
};

const updateProgress = async (event, audio, div) => {
  let progress = await div.querySelector('.player__progressbar');
  let currentTime = await div.querySelector('.player__time_current');
  let current = event.target.currentTime;
  let percent = (current / event.target.duration) * 100;
  progress.style.width = percent + '%';
  
  currentTime.textContent = formatTime(current);

  if (current === audio.duration) {
    await audio.pause();
    div.querySelector('.control__switcher').classList.remove('control__switcher_pause');
  }
};

const formatTime = time => {
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  return min + ':' + ((sec<10) ? ('0' + sec) : sec);
};

const changeQuestion = () => {
  console.log(currentQuestion);
  console.log(allQuestion.length);

  if (currentQuestion === (allQuestion.length - 1)) {
    buildResultePage();
  } else {
    currentQuestion += 1;
    document.querySelector('.item').innerHTML = `Прослушайте запись и выберете птицу`;
    setQuestion();
  }
};

buildVictorinePage();