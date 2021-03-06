var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null, // optional scroll container selector, otherwise use window
    callback:     function(box) {
      box.addEventListener("animationend", function () {
        box.classList.remove('wow');
      }, false)
    }
  }
);

var wowIntro = new WOW(
  {
    boxClass:     'wowIntro',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true,
    scrollContainer: null
  }
);

wow.init();
wowIntro.init();
