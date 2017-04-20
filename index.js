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
        if ($(window).scrollTop() > distance) {
            $('nav').addClass('scrolled');
            $('.section-header').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
            $('.section-header').removeClass('scrolled');
        }
    });
});