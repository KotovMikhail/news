 (function () {
  var TOOLTIP_COORD = '14px';
  var PROPORTIONAL_COORD = '0.972vw';
  var LAPTOP = 1025;
  var menuToggle = document.querySelector('.header__nav-toggle');
  var modalNav = document.querySelector('.modal__nav');
  var modal = modalNav.parentNode;
  var modalNavLink = document.querySelector('.modal__nav-link');
  var openedModal = false;
  var scrollbarWidth = window.util.getScrollbarWidth() + 'px';
  var tooltip = document.querySelector('.tooltip');
  var mainNavLinkElements = modalNav.querySelectorAll('.main-nav__link');

  var toSwitchMenu = function () {
    openedModal = !openedModal;
    modal.classList.toggle('js-box-closed');
    menuToggle.classList.toggle('js-close-btn');

    if (openedModal) {
      document.addEventListener('keydown', onPopupEscPress);
      modal.addEventListener('click', onModalClick);
    } else {
      document.removeEventListener('keydown', onPopupEscPress);
    }
  }

  var onModalClick = function (evt) {
    if (evt.target === modal) {
      toSwitchMenu();
    } else if (evt.target === modalContactParent) {
      closePopup();
    }
  }

  var onPopupEscPress = function (evt) {
    if (openedModal) {
      window.util.isEscEvent(evt, toSwitchMenu);
    } else {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  var onMainNavLinkClick = function () {
    toSwitchMenu();
  }

  var addLinkClickListener = function (element) {
    element.addEventListener('click', onMainNavLinkClick);
  }

  menuToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    toSwitchMenu();
  });

  for (var i = 0; i < mainNavLinkElements.length; i++) {
    addLinkClickListener(mainNavLinkElements[i]);
  }

  if (modalNavLink) {
    var modalContact = document.querySelector('.modal__contact');
    var modalContactParent = modalContact.parentNode;
    var modalContactCloseBtn = modalContact.querySelector('.modal__close-btn');
    var contactInputName = modalContact.querySelector('.contact__input--name');

    var closePopup = function () {
      var clienWidth = document.documentElement.clientWidth;
      modalContactParent.classList.add('js-box-closed');
      document.removeEventListener('keydown', onPopupEscPress);
      menuToggle.style.zIndex = '1002';
      document.documentElement.style.overflowY = 'auto';
      document.body.style.paddingRight = '0';
      if (clienWidth >= LAPTOP) {
        tooltip.style.right = PROPORTIONAL_COORD;
      } else {
        tooltip.style.right = TOOLTIP_COORD;
      }
    }

    var onCloseBtnClick = function (evt) {
      evt.preventDefault();
      closePopup();
    }

    var onNavLinkClick = function (evt) {
      var clienWidth = document.documentElement.clientWidth;
      evt.preventDefault();
      toSwitchMenu();
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.paddingRight = scrollbarWidth;
      if (clienWidth >= LAPTOP) {
        tooltip.style.right = (parseInt(scrollbarWidth, 10) + parseInt(TOOLTIP_COORD, 10)) / 1440 * 100 + 'vw';
      } else {
        tooltip.style.right = parseInt(scrollbarWidth, 10) + parseInt(TOOLTIP_COORD, 10) + 'px';
      }
      modalContactParent.classList.remove('js-box-closed');
      modalContactCloseBtn.addEventListener('click', onCloseBtnClick);
      modalContactParent.addEventListener('click', onModalClick);
      document.addEventListener('keydown', onPopupEscPress);
      contactInputName.focus();
      menuToggle.style.zIndex = '1';
    }

    modalNavLink.addEventListener('click', onNavLinkClick);
  }
})();
