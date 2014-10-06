'use strict';

var state = 1;
var count = 2;
var finished = true;
var stateArray = ['simplify', 'design_code'];

function performAminate() {
    if(!finished) {
        return;
    }
    finished = false;
    $('#'+stateArray[state]).show();
    $('#'+stateArray[state]).removeClass().addClass('animated flipOutY').
        one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
            $(this).hide(0, function() {
                state = (state + 1) % count;
                $('#'+stateArray[state]).show(0, function() {
                    $('#'+stateArray[state]).removeClass().addClass('animated flipInY').
                        one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass();
                            finished = true;
                    });
                });
            });
    });
}

$(document).ready(function() {
    $('#simplify').hide();
    $('#design_code').hide();
    performAminate();
    window.setInterval(performAminate, 5000);
});
