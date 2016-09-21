'use strict';

$(document).ready(function () {

  window.mySwipwer = new Swiper('.swiper-container', {
    autoplay: 3000,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    simulateTouch: false,
    onSlideChangeEnd: function () {
      $('body').css('background-color', $('.swiper-slide-active').css('background-color'));
    }
  });

});
