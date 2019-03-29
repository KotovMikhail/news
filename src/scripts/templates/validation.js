(function () {
  var contactFormModal = document.querySelector('.contact__form--modal');
  var contactBtnModal = contactFormModal.querySelector('.contact__btn--modal');
  var checkboxModal = contactFormModal.querySelector('input[type="checkbox"]');
  var contactFormResult = document.querySelector('.contact__form--result');
  var contactBtnResult = contactFormResult.querySelector('.contact__btn--result');
  var checkboxResult = contactFormResult.querySelector('input[type="checkbox"]')
  var contactFormSupport = document.querySelector('.contact__form--support');
  var contactBtnSupport = contactFormSupport.querySelector('.contact__btn--support');
  var checkboxSupport = contactFormSupport.querySelector('input[type="checkbox"]')
  var contactFormHelp = document.querySelector('.contact__form--help');
  var contactBtnHelp = contactFormHelp.querySelector('.contact__btn--help');
  var checkboxHelp = contactFormHelp.querySelector('input[type="checkbox"]')

  var addInputListener = function (input) {
    input.addEventListener('input', function () {
      if (input.checkValidity()) {
        input.parentNode.classList.remove('contact__input-wrapper--invalid');
      }
    });
  }

  var onSubmitBtnClick = function (evt) {
    var form = evt.target.form;
    var inputs = form.querySelectorAll('input:not([type="checkbox"]');
    var stopSubmit = false;

    for (var i = 0; i < inputs.length; i++) {

      var input = inputs[i];

      addInputListener(input);

      if (input.checkValidity() === false) {
        input.parentNode.classList.add('contact__input-wrapper--invalid');
        stopSubmit = true;
      }
    }

    if (stopSubmit) {
      evt.preventDefault();
    }
  };

  var onCheckboxChange = function (evt) {
    var currentButton = evt.target.form.querySelector('button');
    if (!(evt.target.checked)) {
      currentButton.disabled = true;
    } else {
      currentButton.disabled = false;
    }
  }

  contactBtnModal.addEventListener('click', onSubmitBtnClick);
  contactBtnResult.addEventListener('click', onSubmitBtnClick);
  contactBtnSupport.addEventListener('click', onSubmitBtnClick);
  contactBtnHelp.addEventListener('click', onSubmitBtnClick);

  checkboxModal.addEventListener('change', onCheckboxChange);
  checkboxResult.addEventListener('change', onCheckboxChange);
  checkboxSupport.addEventListener('change', onCheckboxChange);
  checkboxHelp.addEventListener('change', onCheckboxChange);
})();

(function () {
  var inputsTel = document.querySelectorAll('input[type="tel"]');

  var addKeypressListener = function (input) {
    input.onkeypress = function (e) {

      e = e || event;

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      var chr = getChar(e);

      if (chr == null || chr === '+') return;

      if (chr < '0' || chr > '9') {
        return false;
      }
    }
  }

  function setListener (inputs) {
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      addKeypressListener(input);
    }
  }

  function getChar(event) {
    var code = null;

    if (!(event.keyCode < 32)) {
      if (event.which == null) {
        code = String.fromCharCode(event.keyCode) // IE
      } else if (event.which != 0 && event.charCode != 0) {
        code = String.fromCharCode(event.which)
      }
    }

    return code;
  }

  setListener(inputsTel);
})();
