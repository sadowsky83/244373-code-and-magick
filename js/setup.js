'use strict';

// открытие / закрытие блока setup

var openSetup = document.querySelector('.setup-open');
var closeSetup = document.querySelector('.setup-close');
var setupBlock = document.querySelector('.setup');

// открытие
openSetup.addEventListener('click', function() {
  setupBlock.classList.remove('invisible');
});

// закрытие
closeSetup.addEventListener('click', function() {
  setupBlock.classList.add('invisible');
});

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
wizardCoat.addEventListener('click', function() {
  colorFill(wizardCoat, wizardCoatColors);
});

// выбор случайного цвета для глаз
wizardEyes.addEventListener('click', function() {
  colorFill(wizardEyes, wizardEyesColors);
});

// случайный выбор цветов из массивов для background
var colorBackground = function (element, arrayColors) {
  var changeColorBackground = Math.floor(Math.random() * arrayColors.length);
  element.style.background = arrayColors[changeColorBackground];
};

// выбор случайного цвета для фаербола
fireball.addEventListener('click', function() {
  colorBackground(fireball, fireballColors);
});
