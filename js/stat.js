'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var barWidth = 40;
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

var getBarColor = function (name) {
  var barColor = 'hsl(240, 100%, ' + Math.floor(Math.random() * 50) + '%)';
  if (name === 'Вы') {
    barColor = 'rgba(255, 0, 0, 1)';
  }
  return barColor;
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
    ctx.fillStyle = getBarColor(names[i]);
    ctx.fillRect(CLOUD_X + GAP * (i * 2 + 1), CLOUD_X * 2 + CLOUD_Y * 3, barWidth, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP * (i * 2 + 1), CLOUD_X + BAR_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * (i * 2 + 1), CLOUD_Y * 2 + GAP );
  };

};
