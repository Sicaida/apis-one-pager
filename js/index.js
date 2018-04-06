var clicked = false; //start off with overlay off

//Close overlay function
function closeOverlay(push) {
    if (clicked == true) {
        $('.overlay').removeClass('overlayOn');
        clicked = false;
        if (push == undefined){
            history.back();
        }
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


//Use ESC button for closing overlay
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) { // ESC
        closeOverlay();
    }
});


//Intercept back button for use with overlay
jQuery(document).ready(function ($) {

    if (window.history && window.history.pushState) {

        $(window).on('popstate', function () {
            closeOverlay(false);
        });
    }
});