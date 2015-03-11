'use strict';

$(document).ready(function(){

  $(window).resize(function () {
    if ($(window).width() >= 768) {
      window.location = 'members.html';
    }
  });

  $('#btn1').click(function(){
    $(window).scrollTop(203);
  });

  $('#btn2').click(function(){
    $(window).scrollTop(280);
  });

  $('#btn3').click(function(){
    $(window).scrollTop(355);
  });

  $('#btn4').click(function(){
    $(window).scrollTop(432);
  });

  $('#btn5').click(function(){
    $(window).scrollTop(530);
  });

})
