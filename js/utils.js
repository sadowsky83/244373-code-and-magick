'use strict';

// определение переменной ENTER_KEY_CODE (клавиши Ввод)
window.activateEvent = (function () {
  var ENTER_KEY_CODE = 13;
  return function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };
})();

// обработка нажатий клавиш в виджете setup
window.setupKeydownHandler = (function () {
  var ESCAPE_KEY_CODE = 27;
  return function (evt) {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      setup.classList.add('invisible');
    }
  };
})();

window.utils = (function (array) {

  // случайный элемент массива
  var getRandomElement = function (array) {
    var randomElement = Math.floor(Math.random() * array.length);
    return array[randomElement];
  };
  return {
    getRandomElement: getRandomElement,

    getRandomElementExcept: function (array, element) {
      var currentElement;
      while (!currentElement || currentElement === element) {
        currentElement = window.utils.getRandomElement(array);
      }
      return currentElement;
    },
  };
})();
