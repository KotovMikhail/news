(function () {
  var btnRoundElements = document.querySelectorAll('.btn-round');

  var defineTypeDevice = function (element) {
    element.addEventListener('touchstart', function () {
      if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        if (element.classList.contains('js-no-touch')) {
          element.classList.remove('js-no-touch');
        }
      }
    });
  }

  for (var i = 0; i < btnRoundElements.length; i++) {
    defineTypeDevice(btnRoundElements[i]);
  }
})();
