/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gem-puzzle.js":
/*!***************************!*\
  !*** ./src/gem-puzzle.js ***!
  \***************************/
/***/ (() => {

let rowField = 4;
let isStarted = false;
const area = () => rowField * rowField;
let finalPosition = '';
let seconds = 0;
let isTimerWork = false;
let timerId;
let isAudioOn = true;
let cardEnable = true;
const audio = new Audio('../src/assets/sound.mp3');
let listResults = [];
class Card {
  constructor(number, parent) {
    this.number = number;
    this.parent = parent;
    for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classes[_key - 2] = arguments[_key];
    }
    this.classes = classes;
  }
  render() {
    const element = document.createElement('div');
    element.setAttribute(`data-number`, `${this.number}`);
    if (this.classes.length === 0) {
      this.element = `card__item`;
      element.classList.add(this.element);
    } else {
      this.classes.forEach(className => element.classList.add(className));
      element.setAttribute(`data-number`, `0`);
    }
    element.innerHTML += `
    <p class="card__item_number">
      ${this.number}</p>
      `;
    this.parent.append(element);
  }
}
class Result {
  constructor(moves, seconds, field) {
    this.moves = moves;
    this.seconds = seconds;
    this.field = field;
  }
  add() {
    listResults.push([this.moves, this.seconds, this.field]);
  }
}
const setFavicons = scr => {
  const headTitle = document.querySelector('head');
  const setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', scr);
  headTitle.appendChild(setFavicon);
};
setFavicons('../src/assets/fav.ico');
const startGame = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('game__wrapper');
  document.body.append(wrapper);
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="game__buttons">
    <button class="game__buttons_new">Start game</button>
    <button class="game__buttons_save">Save game</button>
    <button class="game__buttons_load">Load game</button>
    <button class="game__buttons_results">Results</button>
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
  <div class="game__switch_wrapper"><span>Sound</span>
    <label class="game__switch">
      <input type="checkbox" checked>
      <span class="game__switch_round"></span>
    </label>
  </div>
  <div class="game__counters">
    <p class="game__counter_moves">Moves: <span>0</span></p>
    <p class="game__counter_time">Time: <span>0</span></p>
  </div>
  `;
  element.classList.add('game__settings');
  wrapper.append(element);
  setFild(area());
};
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const checkSolvability = array => {
  const result = array.reduce((acc, elem, index) => {
    let counter = 0;
    for (let i = index + 1; i <= array.length; i++) {
      if (elem > array[i] && array[i] !== 0) {
        counter += 1;
      }
    }
    return acc + counter;
  }, 0);
  const rowEmptyCard = arr => {
    const index = arr.indexOf(0) + 1;
    return Math.floor(index / rowField);
  };
  if (rowField % 2 === 0) {
    return (result + rowEmptyCard(array)) % 2 === 0 ? false : true;
  } else {
    return result % 2 === 0 ? true : false;
  }
};
const setFild = (number, loadArray) => {
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
  if (number === 9) {
    element.style.gridTemplateColumns = '1fr 1fr 1fr';
  }
  if (number === 16) {
    element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  }
  if (number === 25) {
    element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
  }
  if (number === 36) {
    element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';
  }
  if (number === 49) {
    element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  }
  if (number === 64) {
    element.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
  }
  document.querySelector('.game__wrapper').append(element);
  if (loadArray) {
    loadArray.forEach(el => {
      if (el === 0 || el === '0') {
        new Card('', element, 'card__item', 'card__item_empty').render();
      } else {
        new Card(el, element).render();
      }
    });
  } else {
    let startArray = [];
    for (let i = 0; i < number; i++) {
      startArray.push(i);
    }
    shuffle(startArray);
    const arrayCheck = arr => {
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
  }
};
startGame();
let field = document.querySelector('.game__field');
const buttonNewGame = document.querySelector('.game__buttons_new');
const buttonSaveGame = document.querySelector('.game__buttons_save');
const buttonLoadGame = document.querySelector('.game__buttons_load');
const buttonResults = document.querySelector('.game__buttons_results');
let moves = document.querySelector('.game__counter_moves span');
let time = document.querySelector('.game__counter_time span');
const setMoves = () => {
  moves.innerHTML = Number(moves.innerHTML) + 1;
};
const changeTimer = () => {
  seconds += 1;
  seconds >= 60 ? time.innerHTML = `${Math.floor(seconds / 60)} min ${seconds % 60} sec` : time.innerHTML = `${seconds} sec`;
};
const startTimer = () => {
  isTimerWork = true;
  timerId = setInterval(changeTimer, 1000);
};
const moveCard = event => {
  const allCards = field.querySelectorAll('.card__item');
  let checkPosition = '';
  //console.log(event.target);

  const shiftCard = callback => {
    allCards.forEach((card, i) => {
      if (card === event.target || card === event.target.closest('.card__item')) {
        console.log(card);
        if (cardEnable && allCards[i - rowField] && allCards[i - rowField].classList.contains('card__item_empty')) {
          const changeUp = () => {
            const replacedCard = field.replaceChild(card, allCards[i - rowField]);
            allCards[i + 1] ? allCards[i + 1].before(replacedCard) : field.append(replacedCard);
            callback();
            allCards[i].classList.remove('card__to_up');
            allCards[i].removeEventListener('animationend', changeUp);
            setMoves();
            if (!isTimerWork) {
              startTimer();
            }
            if (isAudioOn) {
              audio.play();
            }
            cardEnable = true;
          };
          cardEnable = false;
          allCards[i].classList.add('card__to_up');
          allCards[i].addEventListener('animationend', changeUp);
        } else if (cardEnable && allCards[i + rowField] && allCards[i + rowField].classList.contains('card__item_empty')) {
          const changeDown = () => {
            const replacedCard = field.replaceChild(card, allCards[i + rowField]);
            allCards[i - 1] ? allCards[i - 1].after(replacedCard) : field.prepend(replacedCard);
            callback();
            allCards[i].classList.remove('card__to_down');
            allCards[i].removeEventListener('animationend', changeDown);
            setMoves();
            if (!isTimerWork) {
              startTimer();
            }
            if (isAudioOn) {
              audio.play();
            }
            cardEnable = true;
          };
          cardEnable = false;
          allCards[i].classList.add('card__to_down');
          allCards[i].addEventListener('animationend', changeDown);
        } else if (cardEnable && allCards[i - 1] && allCards[i - 1].classList.contains('card__item_empty')) {
          const changeLeft = () => {
            const replacedCard = field.replaceChild(card, allCards[i - 1]);
            allCards[i].after(replacedCard);
            callback();
            allCards[i].classList.remove('card__to_left');
            allCards[i].removeEventListener('animationend', changeLeft);
            setMoves();
            if (!isTimerWork) {
              startTimer();
            }
            if (isAudioOn) {
              audio.play();
            }
            cardEnable = true;
          };
          cardEnable = false;
          allCards[i].classList.add('card__to_left');
          allCards[i].addEventListener('animationend', changeLeft);
        } else if (cardEnable && allCards[i + 1] && allCards[i + 1].classList.contains('card__item_empty')) {
          const changeRight = () => {
            const replacedCard = field.replaceChild(card, allCards[i + 1]);
            allCards[i].classList.remove('card__to_right');
            allCards[i].before(replacedCard);
            callback();
            allCards[i].removeEventListener('animationend', changeRight);
            setMoves();
            if (!isTimerWork) {
              startTimer();
            }
            if (isAudioOn) {
              audio.play();
            }
            cardEnable = true;
          };
          cardEnable = false;
          allCards[i].classList.add('card__to_right');
          allCards[i].addEventListener('animationend', changeRight);
        }
      }
    });
  };
  const setPosition = () => {
    field.querySelectorAll('.card__item').forEach(element => {
      checkPosition += element.getAttribute('data-number');
    });
    console.log(checkPosition);
    console.log(finalPosition);
    if (checkPosition === finalPosition) {
      clearInterval(timerId);
      isTimerWork = false;
      console.log('Поздравляю, ты победил!');
      allCards.forEach(card => {
        card.style.cursor = 'not-allowed';
      });
      field.removeEventListener('click', moveCard);

      /* add result to list */
      new Result(moves.innerHTML, seconds, rowField).add();
      listResults.sort(function (a, b) {
        return a[1] - b[1];
      });
      if (listResults.length > 10) {
        listResults.pop();
      }
      console.log(listResults);

      /* show popup */
      const div = document.createElement('div');
      div.classList.add('game__finish');
      div.innerHTML = `Hooray! You solved the puzzle in ${Math.floor(seconds / 60)}:${seconds % 60} and ${moves.innerHTML} moves!`;
      document.querySelector('.game__wrapper').append(div);
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.querySelector('.game__wrapper').append(overlay);
      overlay.addEventListener('click', () => {
        div.remove();
        overlay.remove();
      });
    }
  };
  shiftCard(setPosition);
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

/* save game */

const saveGame = () => {
  let savedArray = [];
  let savedCard = [];
  const allCards = field.querySelectorAll('.card__item');
  allCards.forEach(card => {
    savedCard.push(card.getAttribute('data-number'));
  });
  savedArray.push(savedCard, moves.innerHTML, seconds, rowField);
  console.log(savedArray);
  localStorage.setItem('savedGame', JSON.stringify(savedArray));
};
const loadGame = () => {
  if (localStorage.getItem('savedGame')) {
    const result = localStorage.getItem('savedGame');
    const savedArray = JSON.parse(result);
    document.querySelector('.game__field').remove();
    rowField = savedArray[3];
    seconds = savedArray[2];
    moves.innerHTML = savedArray[1];
    seconds >= 60 ? time.innerHTML = `${Math.floor(seconds / 60)} min ${seconds % 60} sec` : time.innerHTML = `${seconds} sec`;
    isTimerWork = false;
    clearInterval(timerId);
    setFild(area(), savedArray[0]);
    field = document.querySelector('.game__field');
    field.addEventListener('click', moveCard);
    document.querySelectorAll('input[name="area"]').forEach(field => {
      if (+field.value === savedArray[3]) {
        field.checked = true;
      }
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('game__results');
    div.innerHTML = `<h2>There is no saved game</h2>`;
    document.querySelector('.game__wrapper').append(div);
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.querySelector('.game__wrapper').append(overlay);
    overlay.addEventListener('click', () => {
      div.remove();
      overlay.remove();
    });
  }
};

/* list results*/

const showResults = () => {
  const div = document.createElement('div');
  div.classList.add('game__results');
  div.innerHTML = `<h2>The best results</h2>`;
  listResults.forEach((result, index) => {
    div.innerHTML += `<p><b>${index + 1}.</b> the field ${result[2]}x${result[2]} has been solved in 
    ${result[0]} moves and ${Math.floor(result[1] / 60)}:${result[1] % 60}</p>`;
  });
  document.querySelector('.game__wrapper').append(div);
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.querySelector('.game__wrapper').append(overlay);
  overlay.addEventListener('click', () => {
    div.remove();
    overlay.remove();
  });
};

/* local storage*/

function getResultsLocalStorage() {
  if (localStorage.getItem('listResults')) {
    const result = localStorage.getItem('listResults');
    listResults = JSON.parse(result);
  }
}
function setResultsLocalStorage() {
  localStorage.setItem('listResults', JSON.stringify(listResults));
}

/* Sound */

const soundButton = document.querySelector('.game__switch input');
soundButton.addEventListener('change', () => {
  if (soundButton.checked) {
    isAudioOn = true;
  } else {
    isAudioOn = false;
  }
});

/* drag-and-drop */

const dragAndDrop = event => {
  const allCards = field.querySelectorAll('.card__item');
  console.log(event.target);
  console.log('сработало');
  allCards.forEach((card, i) => {
    if (card === event.target || card === event.target.closest('.card__item')) {
      card.draggable = true;
      card.addEventListener('dragstart', e => {
        console.log('поехали');
      });
    }
  });
};
field.addEventListener('mousedown', dragAndDrop);
field.addEventListener('click', moveCard);
buttonNewGame.addEventListener('click', startNewGame);
buttonSaveGame.addEventListener('click', saveGame);
buttonLoadGame.addEventListener('click', loadGame);
buttonResults.addEventListener('click', showResults);
window.addEventListener('load', getResultsLocalStorage);
window.addEventListener('beforeunload', setResultsLocalStorage);

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _gem_puzzle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gem-puzzle */ "./src/gem-puzzle.js");
/* harmony import */ var _gem_puzzle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gem_puzzle__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map