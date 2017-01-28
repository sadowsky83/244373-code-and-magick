'use strict';

// задаем фукцию, отрисовывающую прямоугольники на базе переменных. Общую для фона статистики(с рамкой) и для тени статистики
function drawRect (ctx, rect) {
  ctx.fillStyle = rect.fillColor;
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  if (rect.strokeColor) {
    ctx.strokeStyle = rect.strokeColor;
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }
}

// ищем переменные
// вычисляем максимальное значение в массиве times
function getMaxTime (times) {
  var max = -Infinity;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

return max;
}

// вычисляем случайный синий цвет
function getRandomBlueColor () {
  var randomBlue = (Math.random() * (255 - 1) + 1).toFixed(0); // случайное значение синего [1;255] округленное до 0 знаков после запятой
  var randomOpacity = (Math.random() * (1 - 0) + 1).toFixed(1); // случайное значение непрозрачности [0;1] округленное до 1 знака после запятой
  if (randomOpacity === 0) {
    return 'rgba(0, 0, ' + randomBlue + ', 0.5)'; // устанавливаем значение непрозрачности на случай когда случайно она = 0, чтобы колонка не получилась прозрачной
  } else {
    return 'rgba(0, 0, ' + randomBlue + ', ' + randomOpacity +')';
  }
}

// вычисляем координату X для колонок
function getIndentX (histoX, columnIndent, i) {
  return histoX + columnIndent * i;
}

// вычисляем координату Y для колонок (направление снизу вверх)
function getIndentY (histoY, statisHeight, height) {
  return histoY + statisHeight - height;
}

// выводим фон статстики и тень по переменным с помощью функции
window.renderStatistics = function (ctx, names, times) {
    drawRect(ctx, {
      'x': 110,
      'y': 20,
      'width': 420,
      'height': 270,
      'fillColor': 'rgba(0, 0, 0, 0.7)'
    });
    drawRect(ctx, {
      'x': 100,
      'y': 10,
      'width': 420,
      'height': 270,
      'fillColor': 'white',
      'strokeColor': 'black'
    });

    // Текст заголовока статистики
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура, Вы победили!', 130, 40);
    ctx.fillText('Список результатов:', 130, 60);

    // парамеры гистограммы
    var statisHeight = 150; // высота колонок
    var histoX = 130; // координата колонок по горизонтали (от левого края)
    var histoY = 100; // координата колонок по вертикали (от верхнего края)
    var step = statisHeight / getMaxTime(times); // вычисление высоты колонок
    var columnIndent = 90; // отступ между колонками (50 отступ по заданию + 40 ширина колонки)

    // цикл перебора значений в массивах names и times
    for (var i = 0; i < times.length; i++) {
      var name = names[i];
      var time = times[i];
      var height = step * time;

      // вычисляем координаты X и Y для начала гистограммы
      var indentX = getIndentX(histoX, columnIndent, i);
      var indentY = getIndentY(histoY, statisHeight, height);

      // выводим время с отступом от колонок на 10
      ctx.fillText(time.toFixed(0), indentX, indentY - 10);

      // объявляем колонку как переменную со значениями координат и высоты
      var column = {
        'x': indentX,
        'y': indentY,
        'width': 40,
        height
      };

      // выводим колонки игроков случайного синего цвета, для игрока "Вы" колонка красного цвета
      if (name === 'Вы') {
        column.fillColor = 'rgba(255, 0, 0, 1)';
        drawRect(ctx, column);
      } else {
        column.fillColor = getRandomBlueColor();
        drawRect(ctx, column);
      }

      // рисуем имя игрока
      ctx.fillStyle = 'black';
      ctx.fillText(name, indentX, statisHeight + 120);
    }
  };
