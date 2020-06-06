'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var TEXT_HEIGHT = 16;

var BAR_GAP = 50;
var BAR_WIDTH = 40;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10 + GAP, CLOUD_Y + 10 + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 125, 30);
  ctx.fillText('Список результатов:', 125, 50);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'hsl(255, ' + (Math.random() * 100 + 1) + '%, 50%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    var heights = BAR_HEIGHT * times[i] / maxTime;
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT, BAR_WIDTH, -heights
    );
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 4 - TEXT_HEIGHT - heights);

    ctx.fillStyle = '#000';
    ctx.fillText((players[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 3);
  }
};
