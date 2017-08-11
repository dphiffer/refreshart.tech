

//Scroll Reveal Effect Script
window.sr = ScrollReveal();
sr.reveal('.fadein');


//Following menu as user scrolls
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('nav').fadeIn(500);
            } else {
                $('nav').fadeOut(500);
            }
        });
    });
})(jQuery);
