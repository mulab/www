/**
 * Created by zhuangtianyi on 15/12/25.
 */

'use strict';

$(function() {
  var $main = $('#main');
  $(window).on('load resize', function() {
    var height = $(window).height() - $main.height() - $('footer').height();
    $main.css('margin-top', ((height > 0) ? height / 2.3 : 0).toString() + 'px');
  });
});
