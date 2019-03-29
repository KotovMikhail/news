(function () {
  var reversibleStickers = document.querySelectorAll('.slider--technology .stickers__item');

  var setStickerListener = function (element) {
    element.addEventListener('touchstart', function () {
      if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        if (element.classList.contains('js-no-touch')) {
          element.classList.remove('js-no-touch');
        }
      }

      element.classList.toggle('js-active');
    });
  }

  for (var i = 0; i < reversibleStickers.length; i++) {
    setStickerListener(reversibleStickers[i]);
  }
})();
