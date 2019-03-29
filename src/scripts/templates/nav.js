var body = document.querySelector('body');
var tooltipLinkElements = document.querySelectorAll('.tooltip__link');
var mainNavLinkElements = document.querySelectorAll('.main-nav__link');
var activeTooltipLink = document.querySelector('.tooltip__link.js-active');
var activeMainNavLink = document.querySelector('.main-nav__link.js-active');
var btnRoundDown = document.querySelector('.btn-round--down');
var headerNavIcon = document.querySelector('.header__nav-icon');

var switchActiveMainNavLink = function (target) {
  activeMainNavLink.classList.remove('js-active');
  activeMainNavLink = target;
  activeMainNavLink.classList.add('js-active');
}

var switchActiveTooltipLink = function (target) {
  activeTooltipLink.classList.remove('js-active');
  activeTooltipLink = target;
  activeTooltipLink.classList.add('js-active');
}

var onLinkClick = function (evt) {
  var target = evt.target;

  if (evt.target.classList.contains('tooltip__link')) {
    switchActiveTooltipLink(target);
  } else if (evt.target.classList.contains('main-nav__link')) {
    switchActiveMainNavLink(target);
  }
}

var defineScrollTop = function () {
  var scrollTop = $(document).scrollTop();

  $(tooltipLinkElements).each(function () {
    if (scrollTop >= $($(this).attr('href')).offset().top - 1) {
      switchActiveTooltipLink(this);
    }
  })

  $(mainNavLinkElements).each(function () {
    if (scrollTop >= $($(this).attr('href')).offset().top - 1) {
      switchActiveMainNavLink(this);
    }
  })
}

var scrollTimeout;
var scrollThrottler = function () {
  if (!scrollTimeout) {
    scrollTimeout = setTimeout(function () {
      scrollTimeout = null;
      defineScrollTop();
     }, 1000);
  }
}

var switchColor = function () {
  var scrollTop = $(document).scrollTop();
  $(mainNavLinkElements).each(function () {
    if (scrollTop >= $($(this).attr('href')).offset().top - 45) {
      if ($($(this).attr('href')).css('backgroundColor') === 'rgb(255, 255, 255)') {
        headerNavIcon.classList.add('js-color');
      } else {
        headerNavIcon.classList.remove('js-color');
      }
    }
  })
}

var onWindowScroll = function () {
  scrollThrottler();
  switchColor();
}

var addLinkClickListener = function (element) {
  element.addEventListener('click', onLinkClick);
}

window.addEventListener('scroll', onWindowScroll);

for (var i = 0; i < tooltipLinkElements.length; i++) {
  addLinkClickListener(tooltipLinkElements[i]);
  addLinkClickListener(mainNavLinkElements[i]);
}

defineScrollTop();
