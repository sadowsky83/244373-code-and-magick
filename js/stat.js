'use strict';

window.renderStatistics = function(ctx, names, times){

  // тень статистики
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // фон статистики
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // Текст заголовока статистики
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  // вычисляем максимальное значение в массиве times
  var max = -1;

  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  // парамеры гистограммы
  var statisHeight = 150; // высота колонок
  var histoX = 130; // координата колонок по горизонтали (от левого края)
  var step = statisHeight / max; // вычисление высоты колонок
  var columnIndent = 90; // отступ между колонками (50 отступ по заданию + 40 ширина колонки)
  var i = 0;

  // цикл перебора значений в массиве names
  for (; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var heightColumn = step * time;

    // Вывод значений из массивов (names, times) в облако статистики
    if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = ['rgba(0, 0, ', ((Math.random() * 5) * 50).toFixed(0) ,' , ', (Math.random().toFixed(1)) ,')'].join('');
  }
    ctx.fillRect(histoX + columnIndent * i, 245 - heightColumn, 40, heightColumn);
    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 240 - heightColumn);
    ctx.fillText(name, histoX + columnIndent * i, 260);
  };
};
