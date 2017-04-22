// Smooth Scrolling on click of in-page href

$(document).ready(function() {
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
});

// Navbar dynamic positioning in the page

$(document).ready(function() {
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
});

$(document).ready(function() {
    $("#mobile-menu-icon").click(function() {
        $(".section-header").addClass("open");
    });

    $("#mobile-close-menu-icon").click(function() {
        $(".section-header").removeClass("open");
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        $(".section-header").removeClass("open");
    });

    // Remove top navbar while scrolling down
    // and
    // Apply top navbar while scrolling up

    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $(".section-header").addClass("hidden"); // downscroll code
        } else {
            $(".section-header").removeClass("hidden"); // upscroll code
        }
        lastScrollTop = st;
    });
});