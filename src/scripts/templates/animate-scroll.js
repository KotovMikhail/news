function customScroll (item) {
  $(item).animatescroll();
}

var animateScroll = $('.animate-scroll');

animateScroll.click(function(evt) {
  evt.preventDefault();
  var scrollId = $(this).attr('href');
  customScroll(scrollId);
});
