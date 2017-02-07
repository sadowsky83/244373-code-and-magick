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

var setupOpen = function () {setup.classList.add('invisible')};

// обработка нажатий клавиш в виджете setup
var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setupOpen();
  }
};

// открытие виджета setup
var showSetupWidget = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

// закрытие виджета setup
var hideSetupWidget = function () {
  setupOpen();
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

// случайный выбор цветов из массивов для fill
var colorFill = function (element, arrayColors) {
  var changeColorFill = Math.floor(Math.random() * arrayColors.length);
  element.style.fill = arrayColors[changeColorFill];
};

// выбор случайного цвета для одежды
wizardCoat.addEventListener('click', function () {
  colorFill(wizardCoat, wizardCoatColors);
});

// выбор случайного цвета для глаз
wizardEyes.addEventListener('click', function () {
  colorFill(wizardEyes, wizardEyesColors);
});

// случайный выбор цветов из массивов для background
var colorBackground = function (element, arrayColors) {
  var changeColorBackground = Math.floor(Math.random() * arrayColors.length);
  element.style.background = arrayColors[changeColorBackground];
};

// выбор случайного цвета для фаербола
fireball.addEventListener('click', function () {
  colorBackground(fireball, fireballColors);
});
