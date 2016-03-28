'use strict';

$(document).ready(function () {

  window.mySwipwer = new Swiper('.swiper-container', {
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next'
  });

  $('.swiper-button-prev, .swiper-button-next').click(function () {
    $('#header').css('background-color', $('.swiper-slide-active').css('background-color'));
  });

});
