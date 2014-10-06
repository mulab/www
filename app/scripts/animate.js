'use strict';

var state;
var count = 2;
var stateArray = ['simplify', 'design_code'];

function performAminate() {
    $('#'+stateArray[state]).removeClass().addClass('animated flipOutY').
        one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
            $(this).hide(0, function() {
                state = (state + 1) % count;
                $('#'+stateArray[state]).show(0, function() {
                    $('#'+stateArray[state]).removeClass().addClass('animated flipInY').
                        one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass();
                    });
                });
            });
    });
}

$(document).ready(function() {
    state = 0;
    $('#design_code').hide(0, function() {
        $('#simplify').removeClass().addClass('animated flipInY').
            one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass();
        });
        window.setInterval(performAminate, 5000);
    });
});
