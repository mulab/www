'use strict';

$(document).ready(function () {
  $('.dropdown-toggle').click(function () {
    $(this).css('color', 'rgb(95,49,125)');
  });
});

var mySwiper = new Swiper('.swiper-container', {
  prevButton:'.swiper-button-prev',
  nextButton:'.swiper-button-next',
})