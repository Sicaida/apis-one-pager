var clicked = false; //start off with overlay off

//Close overlay function
function closeOverlay() {
    if (clicked == true) {
        $('.overlay').removeClass('overlayOn');
        clicked = false;
        history.back();
    }
};

//load up Join Us content on button click
function joinClick(file) {
    if (clicked == true) {
        closeOverlay();
    } else {
        $('.overlay').addClass('overlayOn');
        clicked = true;
        $.ajax({
            url: "/html/ajax/" + file,
            success: function (result) {
                $("#overlayContent").html(result);
            }
        });
        history.pushState(null, null, '#JoinUs'); //set url extension
    }
};

//Load up staff profile when clicking on their photo
function staffClick(staff) {
    if (clicked == true) {
        closeOverlay();
    } else {
        $('.overlay').addClass('overlayOn');
        clicked = true;
        $.ajax({
            url: "/html/ajax/staff/" + staff + ".html",
            success: function (result) {
                $("#overlayContent").html(result);
            }
        });
        history.pushState(null, null, '#' + staff); //set url extension
    }
};


//Close overlay function
function closeOverlay() {
    if (clicked == true) {
        $('.overlay').removeClass('overlayOn');
        clicked = false;
        history.back();
    }
};


//Use ESC button for closing overlay
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) { // ESC
        closeOverlay();
    }
});


//Intercept back button for use with overlay
jQuery(document).ready(function ($) {

    if (window.history && window.history.pushState) {

        window.history.pushState('forward', null, './#forward');

        $(window).on('popstate', function () {
            if (clicked == true) { //need to avoid an extra history.back so using unique closeOverlay
                $('.overlay').removeClass('overlayOn');
                clicked = false;
            }
        });
    }
});