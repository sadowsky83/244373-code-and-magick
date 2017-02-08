'use strict';

window.utils = {

  // случайный элемент массива
  getRandomElement: function (array) {
    var randomElemen = Math.floor(Math.random() * array.length);
    return array[randomElemen];
  },
  // проверка случайного элемента на повтор
  getRandomElementExcept: function (array, element) {
    var currentElement;
    while (!currentElement || currentElement === element) {
      currentElement = window.utils.getRandomElement(array);
    }
    return currentElement;
  },
};
