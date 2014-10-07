'use strict';

console.log('\'Allo \'Allo!');

$(document).ready(function () {
  var h = $('#simplify').height();
  $('.bubble').height(h);
  $('#back').height($('#slogan').outerHeight());
  $('#back-bottom').offset({top:($('body').height() - $('#footer').outerHeight())});
  $('#back-bottom').height($('#footer').outerHeight());
});
