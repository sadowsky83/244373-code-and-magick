'use strict';

window.colorizeElement = (function () {
  return function (element, colors, property) {
    var currentColor;

    var randomColor = function (evt) {
      if (evt.type === 'click' || window.utils.activateEvent(evt)) {
        currentColor = window.utils.getRandomElementExcept(colors, currentColor);
        element.style[property] = currentColor;
      }
      return currentColor;
    };

    element.addEventListener('click', randomColor);
    element.addEventListener('keydown', randomColor);

  };
})();
