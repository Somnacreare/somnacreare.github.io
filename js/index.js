const header = $('header');
const shrinkIt = header.height();

$(window).scroll(function() {
    const scroll = $(window).scrollTop();

    if ( scroll >= shrinkIt ) {
        header.addClass('shrunk');
    }
    else {
        header.removeClass('shrunk');
    }
});