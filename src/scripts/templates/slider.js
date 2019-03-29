(function () {
  var brandBlock = document.querySelector('.brand');
  var technologyBlock = document.querySelector('.technology');
  var sliderBrand = brandBlock.querySelector('.slider--brand');
  var sliderTechnology = technologyBlock.querySelector('.slider--technology');

  var initSlider = function (slider, block) {
    var sliderItems = slider.querySelector('.slider__items');
    var sliderItemElements = sliderItems.querySelectorAll('.slider__item');
    var sliderLength = sliderItemElements.length;
    var sliderPrevBtn = slider.querySelector('.slider__control--prev');
    var sliderNextBtn = slider.querySelector('.slider__control--next');
    var currentIndex = 0;
    var activeSlide = sliderItemElements[currentIndex];
    var stickersList = block.querySelectorAll('.slider-stickers .stickers');
    var currentStickers = stickersList[currentIndex];
    var blockClass;

    var addSticker = function () {
      currentStickers.classList.remove('js-active');
      currentStickers = stickersList[currentIndex];
      currentStickers.classList.add('js-active');
    };

    var checkDataBackground = function () {
      if (activeSlide.getAttribute('data-background') !== null) {
        blockClass = activeSlide.getAttribute('data-background');
        block.classList.add(blockClass);
      } else {
        block.classList.remove(blockClass);
      }
    }

    var changeActiveSlide = function (move) {
      var moveClass = (move === 'prev') ? 'slider__item--next' : 'slider__item--prev';
      activeSlide.classList.add(moveClass);

      activeSlide.classList.remove('slider__item--active');
      activeSlide = sliderItemElements[currentIndex];
      activeSlide.classList.add('slider__item--active');
      activeSlide.classList.remove('slider__item--next');
      activeSlide.classList.remove('slider__item--prev');
    };

    var onPrevBtnClick = function (evt) {
      evt.preventDefault();

      if (currentIndex === sliderLength - 1) {
        sliderNextBtn.classList.remove('slider__control--disabled');
        sliderNextBtn.disabled = false;
      }

      --currentIndex;

      if (!currentIndex) {
        sliderPrevBtn.classList.add('slider__control--disabled');
        sliderPrevBtn.disabled = true;
        sliderNextBtn.classList.add('slider__control--first');
      }

      changeActiveSlide('prev');
      checkDataBackground();
      addSticker();
    };

    var onNextBtnClick = function (evt) {
      evt.preventDefault();

      if (!currentIndex) {
        sliderPrevBtn.classList.remove('slider__control--disabled');
        sliderPrevBtn.disabled = false;
        sliderNextBtn.classList.remove('slider__control--first');
      }

      ++currentIndex;

      if (currentIndex === sliderLength - 1) {
        sliderNextBtn.classList.add('slider__control--disabled');
        sliderNextBtn.disabled = true;
      }

      changeActiveSlide('next');
      checkDataBackground();
      addSticker();
    };

    sliderPrevBtn.addEventListener('click', onPrevBtnClick);
    sliderNextBtn.addEventListener('click', onNextBtnClick);
  }

  initSlider(sliderBrand, brandBlock);
  initSlider(sliderTechnology, technologyBlock);
})();
