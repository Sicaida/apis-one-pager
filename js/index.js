var clicked = false; //start off with overlay off

//load up Join Us content on button click
function joinClick(file) {
    if (clicked == true){
        console.log("clicked off");
        $('.overlay').removeClass('overlayOn');
        clicked = false;
    }
    else{
        console.log("clicked on");
        $('.overlay').addClass('overlayOn');
        clicked = true;
        $.ajax({url: "/html/ajax/" + file, success: function(result){
            $("#overlayContent").html(result);
        }});
        history.pushState(null, null, '#hello'); //set url extension
    }
};

//Load up staff profile when clicking on their photo
function staffClick(staff) {
    if (clicked == true){
        console.log("clicked off");
        $('.overlay').removeClass('overlayOn');
        clicked = false;
    }
    else{
        console.log("clicked on");
        $('.overlay').addClass('overlayOn');
        clicked = true;
        $.ajax({url: "/html/ajax/staff/" + staff + ".html", success: function(result){
            $("#overlayContent").html(result);
        }});
        history.pushState(null, null, '#' + staff); //set url extension
    }
};


//Close overlay with button
function closeOverlay() {
    if (clicked == true){
        console.log("clicked off");
        $('.overlay').removeClass('overlayOn');
        clicked = false;
    }
};


//Use ESC button for closing overlay
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $('.overlay').removeClass('overlayOn');
        console.log("esc closed");
        clicked = false;
        window.history.pushState('forward', null, './#forward');
    }
});


//Intercept back button for use with overlay
jQuery(document).ready(function($) {

    if (window.history && window.history.pushState) {

        window.history.pushState('forward', null, './#forward');

        $(window).on('popstate', function() {
            closeOverlay();
        });

    }
});