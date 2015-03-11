'use strict';

var presentID = '0';

$(document).ready(function () {
  $('p.intro').hide();
  $('img.profile').hide();

  $('img#pointOne').mouseover(function () {
    $('p.intro1').fadeIn();
  });
  $('img#pointTwo').mouseover(function () {
    $('p.intro2').fadeIn();
  });
  $('img#pointThree').mouseover(function () {
    $('p.intro3').fadeIn();
  });
  $('img#pointFour').mouseover(function () {
    $('p.intro4').fadeIn();
  });
  $('img#pointFive').mouseover(function () {
    $('p.intro5').fadeIn();
  });

  $('p#intro11').click(function () {
    window.location = "https://github.com/zmy" ;
  });
  $('p#intro12').click(function () {
    window.location = "https://github.com/cgcgbcbc" ;
  });
  $('p#intro13').click(function () {
    window.location = "https://github.com/hqythu" ;
  });
  $('p#intro14').click(function () {
    window.location = "https://github.com/HubertZhang" ;
  });
  $('p#intro15').click(function () {
    window.location = "https://github.com/YueDayu" ;
  });
  $('p#intro16').click(function () {
    window.location = "http://www.renren.com/391274145/profile" ;
  });
  $('p#intro17').click(function () {
    window.location = "http://www.renren.com/559326682/profile" ;
  });

  $('p#intro11').mouseover(function () {
    $('img#profile11').fadeIn();
  });
  $('p#intro11').mouseout(function () {
    $('img#profile11').fadeOut();
  });
  $('p#intro12').mouseover(function () {
    $('img#profile12').fadeIn();
  });
  $('p#intro12').mouseout(function () {
    $('img#profile12').fadeOut();
  });
  $('p#intro13').mouseover(function () {
    $('img#profile13').fadeIn();
  });
  $('p#intro13').mouseout(function () {
    $('img#profile13').fadeOut();
  });
  $('p#intro14').mouseover(function () {
    $('img#profile14').fadeIn();
  });
  $('p#intro14').mouseout(function () {
    $('img#profile14').fadeOut();
  });
  $('p#intro15').mouseover(function () {
    $('img#profile15').fadeIn();
  });
  $('p#intro15').mouseout(function () {
    $('img#profile15').fadeOut();
  });
  $('p#intro16').mouseover(function () {
    $('img#profile16').fadeIn();
  });
  $('p#intro16').mouseout(function () {
    $('img#profile16').fadeOut();
  });
  $('p#intro17').mouseover(function () {
    $('img#profile17').fadeIn();
  });
  $('p#intro17').mouseout(function () {
    $('img#profile17').fadeOut();
  });

  $('p#intro21').mouseover(function () {
    $('img#profile21').fadeIn();
  });
  $('p#intro21').mouseout(function () {
    $('img#profile21').fadeOut();
  });
  $('p#intro22').mouseover(function () {
    $('img#profile22').fadeIn();
  });
  $('p#intro22').mouseout(function () {
    $('img#profile22').fadeOut();
  });
  $('p#intro23').mouseover(function () {
    $('img#profile23').fadeIn();
  });
  $('p#intro23').mouseout(function () {
    $('img#profile23').fadeOut();
  });
  $('p#intro24').mouseover(function () {
    $('img#profile24').fadeIn();
  });
  $('p#intro24').mouseout(function () {
    $('img#profile24').fadeOut();
  });
  $('p#intro25').mouseover(function () {
    $('img#profile25').fadeIn();
  });
  $('p#intro25').mouseout(function () {
    $('img#profile25').fadeOut();
  });

  $('p#intro31').mouseover(function () {
    $('img#profile31').fadeIn();
  });
  $('p#intro31').mouseout(function () {
    $('img#profile31').fadeOut();
  });
  $('p#intro32').mouseover(function () {
    $('img#profile32').fadeIn();
  });
  $('p#intro32').mouseout(function () {
    $('img#profile32').fadeOut();
  });
  $('p#intro33').mouseover(function () {
    $('img#profile33').fadeIn();
  });
  $('p#intro33').mouseout(function () {
    $('img#profile33').fadeOut();
  });
  $('p#intro34').mouseover(function () {
    $('img#profile34').fadeIn();
  });
  $('p#intro34').mouseout(function () {
    $('img#profile34').fadeOut();
  });
  $('p#intro35').mouseover(function () {
    $('img#profile35').fadeIn();
  });
  $('p#intro35').mouseout(function () {
    $('img#profile35').fadeOut();
  });
  $('p#intro36').mouseover(function () {
    $('img#profile36').fadeIn();
  });
  $('p#intro36').mouseout(function () {
    $('img#profile36').fadeOut();
  });
  $('p#intro37').mouseover(function () {
    $('img#profile37').fadeIn();
  });
  $('p#intro37').mouseout(function () {
    $('img#profile37').fadeOut();
  });

  $('p#intro41').mouseover(function () {
    $('img#profile41').fadeIn();
  });
  $('p#intro41').mouseout(function () {
    $('img#profile41').fadeOut();
  });
  $('p#intro42').mouseover(function () {
    $('img#profile42').fadeIn();
  });
  $('p#intro42').mouseout(function () {
    $('img#profile42').fadeOut();
  });
  $('p#intro43').mouseover(function () {
    $('img#profile43').fadeIn();
  });
  $('p#intro43').mouseout(function () {
    $('img#profile43').fadeOut();
  });

  $('p#intro51').mouseover(function () {
    $('img#profile51').fadeIn();
  });
  $('p#intro51').mouseout(function () {
    $('img#profile51').fadeOut();
  });
  $('p#intro52').mouseover(function () {
    $('img#profile52').fadeIn();
  });
  $('p#intro52').mouseout(function () {
    $('img#profile52').fadeOut();
  });
  $('p#intro53').mouseover(function () {
    $('img#profile53').fadeIn();
  });
  $('p#intro53').mouseout(function () {
    $('img#profile53').fadeOut();
  });

  $('div.rotate').mouseover(function () {
    var wheel = $(this).attr('id');
    presentID = wheel.charAt(wheel.length - 1);
  });
});
