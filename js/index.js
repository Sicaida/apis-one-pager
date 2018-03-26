var clicked = false;
function joinClick() {
    if (clicked == true){
        console.log("clicked off");
        $('.overlay').removeClass('overlayOn');
        clicked = false;
    }
    else{
        console.log("clicked on");
        $('.overlay').addClass('overlayOn');
        clicked = true;
    }
};

function closeOverlay() {
    if (clicked == true){
        console.log("clicked off");
        $('.overlay').removeClass('overlayOn');
        clicked = false;
    }
};

$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $('.overlay').removeClass('overlayOn');
        console.log("esc closed");
        clicked = false;
    }
});

//
//var wow = new WOW(
//    {
//        boxClass:     'wow',      // animated element css class (default is wow)
//        animateClass: 'animated', // animation css class (default is animated)
//        offset:       0,          // distance to the element when triggering the animation (default is 0)
//        mobile:       true,       // trigger animations on mobile devices (default is true)
//        live:         true,       // act on asynchronously loaded content (default is true)
//        callback:     function(box) {
//            // the callback is fired every time an animation is started
//            // the argument that is passed in is the DOM node being animated
//        },
//        scrollContainer: null // optional scroll container selector, otherwise use window
//    }
//);
//wow.init();
