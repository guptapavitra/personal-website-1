$(document).ready(function() {
    // Smooth Scrolling on click of in-page href

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // For desktop:
    // Adding class scrolled to section-header
    // when scroll crosses section-1

    $(window).bind('scroll', function() {
        var distance = $('.section-1').height();
        if ($(window).scrollTop() >= distance) {
            $('nav').addClass('scrolled');
            $('.section-header').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
            $('.section-header').removeClass('scrolled');
        }
    });

    // Adding class 'open' to section-header

    $("#mobile-menu-icon").click(function() {
        $(".section-header").addClass("open");
    });

    // Removing class 'open' from section-header

    $("#mobile-close-menu-icon").click(function() {
        $(".section-header").removeClass("open");
    });

    // Removing class 'open' from section-header
    // when a link in section-header is clicked

    $('a[href*="#"]:not([href="#"])').click(function() {
        $(".section-header").removeClass("open");
    });

    // Remove top navbar while scrolling down
    // and
    // Apply top navbar while scrolling up

    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st - lastScrollTop > 40) {
            $(".section-header").addClass("hidden"); // downscroll code
        } else {
            $(".section-header").removeClass("hidden"); // upscroll code
        }
        lastScrollTop = st;
    });
});