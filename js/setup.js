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
var wizard = document.querySelector('.setup-wizard-appearance');
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

// случайный выбор цветов фигурки мага
wizard.addEventListener('click', function() {
  var changeColor = Math.round(Math.random() * 4); // случайный выбор номера элемента массива

  wizardCoat.addEventListener('click', function() {
    wizardCoat.style.fill = wizardCoatColors[changeColor];
  });

  wizardEyes.addEventListener('click', function() {
    wizardEyes.style.fill = wizardEyesColors[changeColor];
  });
});

fireball.addEventListener('click', function() {
  var changeColor = Math.round(Math.random() * 4); // случайный выбор номера элемента массива
  fireball.style.background = fireballColors[changeColor];
});
