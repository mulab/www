'use strict';

$(document).ready(function () {
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
  };
  var resetTransform = function(){
    $('.headimg').css('transform', '');
    $('.type').css('transform', '');
    if(currentElementIndex >= 0 && currentTypeIndex >= 0) {
      var linePerType = itemPerType.map(function(_, e){
        return 1 + (e - 1 - (e - 1) % itemPerLine) / itemPerLine;
      });
      var currentLineNumber = (currentElementIndex - currentElementIndex % itemPerLine) / itemPerLine;
      var $currentType = $($('.type')[currentTypeIndex]);
      var transformDistance = Math.max($('.tag-left').height(), $('.tag-right').height()) + 80;//padding
      $currentType.nextAll().css('transform', 'translateY(' + transformDistance + 'px)');
      $($currentType.find('.headimg')[itemPerLine * (1 + currentLineNumber) - 1]).nextAll().css('transform', 'translateY(' + transformDistance + 'px)');
      var totalLineNumber = 0;
      for(var i = currentTypeIndex; i < linePerType.length; i++){
        totalLineNumber += linePerType[i];
      }
      totalLineNumber -= (currentLineNumber + 1);
      console.log(totalLineNumber);
      $('#tag').css('transform', 'translateY(-' + (totalLineNumber * $('.headimg').height()) + 'px)');
    }
  };
  recenter();
  $(window).on('resize', function(){
    recenter();
    resetTransform();
  });
  var removeOld = function(callback){
    if(current !== null){
      $('#tag').addClass('closed');
      $('#tag').one('transitionend', callback);
      $('.headimg').css('transition', 'transform 300ms');
      $('.type').css('transition', 'transform 300ms');
      $('.headimg').css('transform', '');
      $('.type').css('transform', '');
      $('.data-wrap').one('transitionend', function(){
        $('.headimg').css('transition', '');
        $('.type').css('transition', '');
      });
    } else {
      callback();
    }
  };
  var loadNew = function(target){
    if(target !== null){
      current = $(target).data('people').name;
      var $headimg = $(target);
      var data = $headimg.data('people');
      $('#tag-name').html(data.name);
      $('#tag-img').prop('src', data.url);
      $('#tag-link').prop('href', data.page);
      $('#tag').removeClass('closed');
      console.log($('#tag').height());
      currentElementIndex = $headimg.prevAll().length;
      currentTypeIndex = $headimg.parent().parent().prevAll().length;
      $('.headimg').css('transition', 'transform 300ms');
      $('.type').css('transition', 'transform 300ms');
      resetTransform();
      $('.data-wrap').one('transitionend', function(){
        $('.headimg').css('transition', '');
        $('.type').css('transition', '');
      });
    } else {
      current = null;
      currentElementIndex = -1;
      currentTypeIndex = -1;
    }
  };
  $('.headimg').on('click', function(event){
    if( current === null || current !== $(event.currentTarget).data('people').name){
      removeOld(loadNew.bind(this, event.currentTarget));
    }
  });
  $('.fliper').on('transitionend', function(event){
    event.stopPropagation();
  });
});
