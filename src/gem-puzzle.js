import { body } from './globals';

const rowField = 4;
const area = rowField * rowField;

class Card {
  constructor(number, parent, ...classes) {
    this.number = number;
    this.parent = parent;
    this.classes = classes;
  }

  render() {
    const element = document.createElement('div');
    if (this.classes.length === 0) {
      this.element = `card__item`;
      this.element2 = `data-number="${this.number}"`;
      element.classList.add(this.element, this.element2);
    } else {
      this.classes.forEach((className) => element.classList.add(className));
    }

    element.innerHTML += `
    <p class="card__item_number">
      ${this.number}</p>
      `;
    this.parent.append(element);
  }
}

const setFild = (number) => {
  const element = document.createElement('div');
  element.classList.add('game__field');
  if (number === 16) {element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';}
  body.append(element);

  // надо все-таки делать массив, который случайно генерируется, да?
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      new Card('', element, 'card__item', 'card__item_empty').render();
    } else {
      new Card(i, element).render();
    }
  }
};

setFild(area);

const field = document.querySelector('.game__field');
//const allCards = field.querySelectorAll('.card__item');

const moveCard = (event) => {
  //console.log(event.target);
  const allCards = field.querySelectorAll('.card__item');

  allCards.forEach((card, i) => {
    
    if (card === event.target || card === event.target.closest('.card__item')) {
      console.log(card);
      if (allCards[i - rowField] && allCards[i - rowField].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i - rowField]);
        console.log('один');
        allCards[i + 1].before(replacedCard);
      }
      if (allCards[i + rowField] && allCards[i + rowField].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i + rowField]);
        allCards[i - 1].after(replacedCard);
      }
      if (allCards[i - 1] && allCards[i - 1].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i - 1]);
        allCards[i].after(replacedCard);
      }
      if (allCards[i + 1] && allCards[i + 1].classList.contains('card__item_empty') ) {
        const replacedCard = field.replaceChild(card, allCards[i + 1]);
        allCards[i].before(replacedCard);
      }
    }
  });
};

field.addEventListener('click', moveCard);


// Экспортируем эти функции,
// чтобы воспользоваться ими в другом месте:
// export { setFild, moveCard };
