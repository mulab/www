'use strict';

$(document).ready(function () {
  var isRunning = false;
  var itemPerType = $('.type').map(function(){
    return $(this).find('.headimg').length;
  });
  var itemPerLine = 0;
  var current = null;
  var currentElementIndex = -1;
  var currentTypeIndex = -1;
  var recenter = function(){
    itemPerLine = parseInt($('.mytr').width() / $('.headimg').width());
    var distance = $('.mytr').width() % $('.headimg').width();
    $('.data-wrap').css('transform', 'translateX(' + distance / 2 + 'px)');
    $('#tag').css('transform', 'translateX(-' + distance / 2 + 'px)');
  };
  var resetTransform = function(){
    $('.headimg').css('transform', '');
    $('.type').css('transform', '');
    if(currentElementIndex >= 0 && currentTypeIndex >= 0) {
      var currentLineNumber = (currentElementIndex - currentElementIndex % itemPerLine) / itemPerLine;
      var $currentType = $($('.type')[currentTypeIndex]);
      var insertIndex = itemPerLine * (1 + currentLineNumber) - 1;
      if(insertIndex > itemPerType[currentTypeIndex] - 1){
        insertIndex = itemPerType[currentTypeIndex] - 1;
      }
      var $target = $($currentType.find('.headimg')[insertIndex]);
      $target.after($('#tag').detach());
    } else {
      $('.data-wrap').after($('#tag').detach());
    }
  };
  recenter();
  $(window).on('resize', function(){
    recenter();
    resetTransform();
  });
  var removeOld = function(callback){
    if(current !== null){
      $($($('.type')[currentTypeIndex]).find('.headimg')[currentElementIndex]).removeClass('selected');
      $('#tag').addClass('closed');
      $('#tag').one('transitionend', callback);
    } else {
      callback();
    }
  };
  var loadNew = function(target){
    if(target !== null){
      current = $(target).data('people').name;
      var $headimg = $(target);
      var data = $headimg.data('people');
      $headimg.addClass('selected');
      $('#tag-name').html(data.name);
      $('#tag-img').prop('src', data.url);
      $('#tag-link').prop('href', data.page);
      currentElementIndex = $headimg.prevAll().length;
      currentTypeIndex = $headimg.parent().parent().prevAll().length;
      resetTransform();
      $('#tag').offset();//force rerender
      $('#tag').removeClass('closed');
    } else {
      current = null;
      currentElementIndex = -1;
      currentTypeIndex = -1;
      resetTransform();
    }
    isRunning = false;
  };
  $('.headimg').on('click', function(event){
    if(isRunning){
      return;
    }
    isRunning = true;
    if( current === null || current !== $(event.currentTarget).data('people').name){
      removeOld(loadNew.bind(this, event.currentTarget));
    } else {
      removeOld(loadNew.bind(this, null));
    }
  });
});
