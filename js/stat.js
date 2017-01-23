'use strict';

window.renderStatistics = function(ctx, names, times){

  // тень статистики
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // фон статистики
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // Текст заголовок статистики
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  // гистограмма статистики




};
