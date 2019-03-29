'use strict';

$(document).ready(function() {
  svg4everybody();

  //= templates/util.js
  //= templates/show-modal.js
  //= templates/nav.js
  //= templates/animation.js
  //= templates/slider.js
  //= templates/animate-scroll.js
  //= templates/validation.js
  //= templates/flipSticker.js
  //= templates/proportionality.js
  //= templates/smoothing.js
  //= templates/defineTypeDevice.js
  vhCheck({
    onUpdate: function noop() {
      wowIntro.init();
    }
  });
});
