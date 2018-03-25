$(document).ready(function () {
    // Declare Carousel jquery object
    var owl = $('.owl-carousel');

    // Carousel initialization
    owl.owlCarousel({
        loop: true,
        margin: 0,
        navSpeed: 500,
        nav: true,
        dots: true,
        dotsEach: true,
        dotData: true,
        autoplay: true,
        rewind: true,
        items: 1,
        navText : [
            '<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            // breakpoint from 0 up
            360: {

            },
            // breakpoint from 480 up
            480: {

            },
            // breakpoint from 768 up
            768: {

            },
            1200: {

            },
            1920: {

            }
        }
    });
});