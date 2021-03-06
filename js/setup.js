'use strict';

var openSetup = document.querySelector('.setup-open');
var closeSetup = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');
var setupSubmit = document.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

// определение переменной ENTER_KEY_CODE (клавиши Ввод)
var activateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

// обработка нажатий клавиш в виджете setup
var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};

// открытие виджета setup
var showSetupWidget = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

// закрытие виджета setup
var hideSetupWidget = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

// изменение ARIA роли
var statusAriaRole = function (item) {
  var pressed = (item.getAttribute('aria-pressed') === 'true');
  item.setAttribute('aria-pressed', !pressed);
};

// открытие виджета setup по клику
openSetup.addEventListener('click', function () {
  showSetupWidget();
  statusAriaRole(openSetup);
});

// открытие виджета setup по нажатию
openSetup.addEventListener('keydown', function (evt) {
  if (activateEvent(evt)) {
    showSetupWidget();
    statusAriaRole(openSetup);
  }
});

// закрытие виджета setup по клику
var closeButton = function (nameButton) {
  nameButton.addEventListener('click', function () {
    hideSetupWidget();
    statusAriaRole(nameButton);
  });

  // закрытие виджета setup по нажатю
  nameButton.addEventListener('keydown', function (evt) {
    if (activateEvent(evt)) {
      hideSetupWidget();
      statusAriaRole(nameButton);
    }
  });
};

closeButton(closeSetup);
closeButton(setupSubmit);

// изменение цвета фигурки мага и цвета фаербола
var wizardCoat = document.getElementById('wizard-coat');
var wizardEyes = document.getElementById('wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

// массив цвета одежды
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

// массив цвета глаз
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
// массив цвета фаербола
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
window.colorizeElement(fireball, fireballColors, 'background');
