var clicked = false;
var mobileMenuClicked = false;//start off with overlay off

function menuClick() {
    if (mobileMenuClicked == true) {
        closeMobileMenu();
    } else {
        $('#mobileMenu').addClass('mobileMenuOpen');
        mobileMenuClicked = true;
        history.pushState(null, null, '#menu'); //set url extension
    }
};

//Close overlay function 
function closeMobileMenu(push) {
    if (mobileMenuClicked == true) {
        $('#mobileMenu').removeClass('mobileMenuOpen');
        mobileMenuClicked = false;
        if (push == undefined){
            history.back();
        }
    }
};

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

//Close overlay function
function closeStaff() {
    $("#whoWeAreContent").html("<p style='animation-delay: 0.4s'>Apis is a Canberra based professional services firm specialising in strategic advisory and digital transformation services as well as hands-on solutions in delivery management, business analysis, digital design, complex procurement and program evaluation and review.  We are a firm of practitioners, known for cooperatively shaping and solving major initiatives, together with our government clients.</p><br><p style='animation-delay: 0.45s'  class='col-3'>Our purpose is to become partners and trusted advisors to our clients; to inspire our people to achieve their best in interesting and challenging environments; and to be pragmatic and agile in meeting our clients’ challenges.</p>");
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
//    if (clicked == true) {
////        closeOverlay();
//    } else {
////        $('.overlay').addClass('overlayOn');
//        clicked = true;
        $.ajax({
            url: "/html/ajax/staff/" + staff + ".html",
            success: function (result) {
                $("#whoWeAreContent").html(result);
            }
        });
//        history.pushState(null, null, '#' + staff); //set url extension
//    }
};


//Use ESC button for closing overlay
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) { // ESC
        closeOverlay();
        closeMobileMenu();
    }
});

function disableScroll(){
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
};


//Intercept back button for use with overlay
jQuery(document).ready(function ($) {

    if (window.history && window.history.pushState) {

        $(window).on('popstate', function () {
            closeOverlay(false);
            closeMobileMenu();
        });
    }
});