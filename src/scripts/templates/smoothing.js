var TOOLTIP_RATE = 0.0236111111111111;
var LAPTOP_WIDTH = 1025;
var DESKTOP_WIDTH = 1800;
var BORDER_RATIO = 0.0006944;
var TOOLTIP_RATIO = 0.025;

var tooltips = document.querySelector('.tooltip');

function tooltipResize(generateStyles) {
  var clienWidth = document.documentElement.clientWidth;
  if (document.documentElement.clientWidth >= LAPTOP_WIDTH) {
    var radius = Math.round(Math.round(clienWidth * TOOLTIP_RATE) / 10) * 10 + 'px';
    var tooltipSize = Math.round(Math.round(clienWidth * TOOLTIP_RATIO) / 10) * 10 + 'px';
    var borderWidth = Math.round(Math.round(clienWidth * BORDER_RATIO) / 10) * 10 + 'px';
    var style;
    var leftSideStyle = '.tooltip__circle-left::after{border-radius:' + radius + ' 0 0 ' + radius + ';border-width:' + borderWidth + ';}';
    var rightSideStyle = '.tooltip__circle-right::after{border-radius:0 ' + radius + ' ' + radius + ' 0;border-width:' + borderWidth + ';}';
    var tooltipItem = '.tooltip__item{height:' + tooltipSize + ';width:' + tooltipSize + '}';

    if (generateStyles) {
      style = tooltips.querySelector('style');
      style.innerHTML = leftSideStyle;
      style.innerHTML += rightSideStyle;
      style.innerHTML += tooltipItem;
    } else {
      style = document.createElement('style');
      style.innerHTML = leftSideStyle;
      style.innerHTML += rightSideStyle;
      style.innerHTML += tooltipItem;
      tooltips.appendChild(style);
    }
  }
}

tooltipResize(false);

window.addEventListener('resize', function () {
  tooltipResize(true);
});
