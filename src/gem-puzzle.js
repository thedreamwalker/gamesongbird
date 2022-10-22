let rowField = 4;
let isStarted = false;
const area = () => rowField * rowField;
let finalPosition = '';

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
  document.querySelector('.game__wrapper').append(element);

  // надо все-таки делать массив, который случайно генерируется, да?
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      new Card('', element, 'card__item', 'card__item_empty').render();
    } else {
      new Card(i, element).render();
    }
  }
};

startGame();

let field = document.querySelector('.game__field');
const buttonNewGame = document.querySelector('.game__buttons_new');
let moves = document.querySelector('.game__counter_moves span');

const setMoves = () => {
  moves.innerHTML = Number(moves.innerHTML) + 1;
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
      }
      if (allCards[i + rowField] && allCards[i + rowField].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i + rowField]);
        allCards[i - 1] ? allCards[i - 1].after(replacedCard) : field.prepend(replacedCard);
        setMoves();
      }
      if (allCards[i - 1] && allCards[i - 1].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i - 1]);
        allCards[i].after(replacedCard);
        setMoves();
      }
      if (allCards[i + 1] && allCards[i + 1].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i + 1]);
        allCards[i].before(replacedCard);
        setMoves();
      }
    }
  });

  let checkPosition = '';

  field.querySelectorAll('.card__item').forEach((element) => {
    checkPosition += element.getAttribute('data-number');
  });

  if (checkPosition === finalPosition) {
    console.log('Поздравляю, ты победил!');
  }
};

const startNewGame = () => {
  document.querySelector('.game__field').remove();
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

field.addEventListener('click', moveCard);
buttonNewGame.addEventListener('click', startNewGame);


// Экспортируем эти функции,
// чтобы воспользоваться ими в другом месте:
// export { setFild, moveCard };
