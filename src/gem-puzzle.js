class Card {
  constructor (number, parent, ...classes) {
    this.number = number;
    this.parent = parent;
  }

  render() {
    const element = document.createElement('div');
    if (this.classes.length === 0) {
      this.element = 'card__item';
      element.classList.add(this.element);
    } else {
      this.classes.forEach(className => element.classList.add(className));
    }
    
    element.innerHTML += `
    <p class="card__item_number">
      ${this.number}
    </p>`;
    this.parent.append(element);
  }
 }

const body = document.body;

const setFild = (number) => {

  const element = document.createElement('div');
  element.classList.add('game__field');
  body.append(element);

  // надо все-таки делать массив, который случайно генерируется, да?
  for (let i = 0; i < number; i++) {
    new Card(i, element).render();
  }
};

/*function sayHello() {
  console.log('Hello!');
}

function sayBye() {
  console.log('Bye!');
}*/

// Экспортируем эти функции,
// чтобы воспользоваться ими в другом месте:
export { sayHello, sayBye };
