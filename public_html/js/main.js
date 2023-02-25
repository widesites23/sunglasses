$(document).ready(function () {

    // hamburger ------------------------------
    if ($(".hamburger").length > 0) {
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
        });
    }
    // owl carousel top -----------------------
    $("#owl-carousel-1").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        dots: true,
        autoplay: false
    });
    // counter --------------------------------
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});