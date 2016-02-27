'use strict';

$(document).ready(function () {

  $('.navbar-nav>li').mouseover(function () {
    $(this).addClass('active');
  }).mouseout(function () {
    $(this).removeClass('active');
  });

  $('.dropdown-menu>li').mouseover(function () {
    $(this).find('.itemcircle').css('visibility', 'visible');
  }).mouseout(function () {
    $(this).find('.itemcircle').css('visibility', 'hidden');
  });

  var width = $(window).width();
  if (width < 768) {
    $('.members').attr('href', 'members_mobile.html');
  }
});
