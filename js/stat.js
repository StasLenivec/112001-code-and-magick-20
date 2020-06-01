'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100; //расположение облака по Х
var CLOUD_Y = 10; //расположение облака по У
var GAP = 50; //отступ между колонками
var FONT_GAP = 15; //размер шрифта
var BAR_HEIGHT = 150; //высота колонки
var barWidth = 40;//ширина колонки
var CONGRATS_TEXT_X = 125;
var CONGRATS_TEXT_Y = 30;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;

};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y * 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CONGRATS_TEXT_X, CONGRATS_TEXT_Y);
  ctx.fillText('Список результатов:', CONGRATS_TEXT_X, CONGRATS_TEXT_Y + 20);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP * (i * 2 + 1), barWidth * 2, barWidth, (BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP * (i * 2 + 1), CLOUD_X + BAR_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * (i * 2 + 1), CLOUD_Y * 2 + GAP );
  };

};
