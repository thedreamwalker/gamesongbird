let rowField = 4;
let isStarted = false;
const area = () => rowField * rowField;
let finalPosition = '';
let seconds = 0;
let isTimerWork = false;
let timerId;

class Card {
  constructor(number, parent, ...classes) {
    this.number = number;
    this.parent = parent;
    this.classes = classes;
  }

  render() {
    const element = document.createElement('div');
    element.setAttribute(`data-number`, `${this.number}`);
    if (this.classes.length === 0) {
      this.element = `card__item`;
      element.classList.add(this.element);
    } else {
      this.classes.forEach((className) => element.classList.add(className));
      element.setAttribute(`data-number`, `0`);
    }

    element.innerHTML += `
    <p class="card__item_number">
      ${this.number}</p>
      `;
    this.parent.append(element);
  }
}

const startGame = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('game__wrapper');
  document.body.append(wrapper);
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="game__buttons">
    <button class="game__buttons_new">Start game</button>
    <button>Save game</button>
    <button>Results</button>
  </div>
  <form class="game__area">
    <fieldset class="area__fieldset">
      <ul class="area__list">
        <li class="area__item">
          <input type="radio" id="areaChoice1" name="area" value="3">
          <label for="areaChoice1">
            <span class="area__label_button"></span>
            <div class="area__label_value">
              3х3
            </div>
          </label>
        </li>
        <li class="area__item">
          <input type="radio" id="areaChoice2" name="area" value="4" checked>
          <label for="areaChoice2">
            <span class="area__label_button"></span>
            <div class="area__label_value">
              4х4
            </div>
          </label>
        </li>
        <li class="area__item">
          <input type="radio" id="areaChoice3" name="area" value="5">
          <label for="areaChoice3">
            <span class="area__label_button"></span>
            <div class="area__label_value">
              5х5
            </div>
          </label>
        </li>
        <li class="area__item">
          <input type="radio" id="areaChoice4" name="area" value="6">
          <label for="areaChoice4">
            <span class="area__label_button"></span>
            <div class="area__label_value">
              6х6
            </div>
          </label>
        </li>
        <li class="area__item">
          <input type="radio" id="areaChoice5" name="area" value="7">
          <label for="areaChoice5">
            <span class="area__label_button"></span>
            <div class="area__label_value">
              7х7
            </div>
          </label>
        </li>
        <li class="area__item">
          <input type="radio" id="areaChoice6" name="area" value="8">
          <label for="areaChoice6">
            <span class="area__label_button"></span>
            <div class="area__label_value">
              8х8
            </div>
          </label>
        </li>
      </ul>
    </fieldset>
  </form>
  <div class="game__counters">
    <p class="game__counter_moves">Moves: <span>0</span></p>
    <p class="game__counter_time">Time: <span>0</span></p>
  </div>
  `;
  element.classList.add('game__settings');
  wrapper.append(element);

  setFild(area());
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  [array[i], array[j]] = [array[j], array[i]];
}
};

const checkSolvability = (array) => {
  const result = array.reduce((acc, elem, index) => {
    let counter = 0;
    for (let i = index + 1; i <= array.length; i++) {
      if (elem > array[i] && array[i] !== 0) {
        counter += 1;
      }
    }
    return acc + counter;
  }, 0);
  

  const rowEmptyCard = (arr) => {
    const index = arr.indexOf(0) + 1;
    return Math.floor(index / rowField);
  };

  if (rowField % 2 === 0) {
    return (result + rowEmptyCard(array)) % 2 === 0 ? false : true;
  } else {
    return result % 2 === 0 ? true : false;
  }
};

const setFild = (number) => {

  finalPosition = '';

  for (let i = 1; i <= number; i++) {
    if (i === number) {
      finalPosition += 0;
    } else {
      finalPosition += i;
    }
  }
  
  const element = document.createElement('div');
  element.classList.add('game__field');
  if (number === 9) {element.style.gridTemplateColumns = '1fr 1fr 1fr';}
  if (number === 16) {element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';}
  if (number === 25) {element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';}
  if (number === 36) {element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';}
  if (number === 49) {element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr';}
  if (number === 64) {element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';}
  document.querySelector('.game__wrapper').append(element);

  let startArray = [];

  for (let i = 0; i < number; i++) {
    startArray.push(i);
  }

  shuffle(startArray);

  const arrayCheck = (arr) => {
    if (checkSolvability(arr)) {
      arr.forEach(el => {
        if (el === 0) {
          new Card('', element, 'card__item', 'card__item_empty').render();
        } else {
          new Card(el, element).render();
        }
      });
    } else {
      shuffle(startArray);
      arrayCheck(startArray);
    }
  };

  arrayCheck(startArray);
};

startGame();

let field = document.querySelector('.game__field');
const buttonNewGame = document.querySelector('.game__buttons_new');
let moves = document.querySelector('.game__counter_moves span');
let time = document.querySelector('.game__counter_time span');

const setMoves = () => {
  moves.innerHTML = Number(moves.innerHTML) + 1;
};

const changeTimer = () => {
  seconds += 1;
  seconds >= 60 ? time.innerHTML = 
  `${Math.floor(seconds / 60)} min ${seconds % 60} sec` : time.innerHTML = 
  `${seconds} sec`
  ;
};

const startTimer = () => {
  isTimerWork = true;
  timerId = setInterval(changeTimer, 1000);
};

const moveCard = (event) => {
  const allCards = field.querySelectorAll('.card__item');
  console.log(event.target);

  allCards.forEach((card, i) => {
    
    if (card === event.target || card === event.target.closest('.card__item')) {
      //console.log(card);
      
      if (allCards[i - rowField] && allCards[i - rowField].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i - rowField]);
        allCards[i + 1] ? allCards[i + 1].before(replacedCard) : field.append(replacedCard);
        setMoves();
        if (!isTimerWork) {
          startTimer();
        }
      }
      if (allCards[i + rowField] && allCards[i + rowField].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i + rowField]);
        allCards[i - 1] ? allCards[i - 1].after(replacedCard) : field.prepend(replacedCard);
        setMoves();
        if (!isTimerWork) {
          startTimer();
        }
      }
      if (allCards[i - 1] && allCards[i - 1].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i - 1]);
        allCards[i].after(replacedCard);
        setMoves();
        if (!isTimerWork) {
          startTimer();
        }
      }
      if (allCards[i + 1] && allCards[i + 1].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i + 1]);
        allCards[i].before(replacedCard);
        setMoves();
        if (!isTimerWork) {
          startTimer();
        }
      }
    }
  });

  let checkPosition = '';

  field.querySelectorAll('.card__item').forEach((element) => {
    checkPosition += element.getAttribute('data-number');
  });

  if (checkPosition === finalPosition) {
    clearInterval(timerId);
    isTimerWork = false;
    console.log('Поздравляю, ты победил!');

    const div = document.createElement('div');
    div.classList.add('game__finish');
    div.innerHTML = 
    `Hooray! You solved the puzzle in ${Math.floor(seconds / 60)}:${seconds % 60} and ${moves.innerHTML} moves!`;
    document.querySelector('.game__wrapper').append(div);

    // потом это обнови-удали. подложку стоит тоже сделать?
  }
};

const startNewGame = () => {
  document.querySelector('.game__field').remove();
  seconds = 0;
  moves.innerHTML = 0;
  time.innerHTML = 0;
  isTimerWork = false;
  clearInterval(timerId);
  setFild(area());
  field = document.querySelector('.game__field');
  field.addEventListener('click', moveCard);
};

/*check change fields*/

const allFields = document.querySelectorAll('input[name="area"]');


allFields.forEach(element => {
  element.addEventListener('click', () => {
    rowField = Number(element.value);
    element.checked = true;
  });
});

/* drag-and-drop */

const dragAndDrop = (event) => {

  const allCards = field.querySelectorAll('.card__item');
  console.log(event.target);
  console.log('сработало');

  allCards.forEach((card, i) => {
    
    if (card === event.target || card === event.target.closest('.card__item')) {
      card.onmousedown = function(event) {

        let shiftX = event.clientX - card.getBoundingClientRect().left;
        let shiftY = event.clientY - card.getBoundingClientRect().top;
      
        card.style.position = 'absolute';
        card.style.zIndex = 1000;
        document.body.append(card);
      
        moveAt(event.pageX, event.pageY);
      
        // moves the ball at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
          card.style.left = pageX - shiftX + 'px';
          card.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the ball, remove unneeded handlers
        card.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          card.onmouseup = null;
        };
      
      };
      
      card.ondragstart = function() {
        return false;
      };
    }
  });
};

//field.addEventListener('mousedown', dragAndDrop);
field.addEventListener('click', moveCard);
buttonNewGame.addEventListener('click', startNewGame);


// Экспортируем эти функции,
// чтобы воспользоваться ими в другом месте:
// export { setFild, moveCard };
