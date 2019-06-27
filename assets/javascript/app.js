$(document).ready(function () {
    $('.parallax').parallax();
    $('.sidenav').sidenav();
});

$(document).on('scroll', function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $('section');

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass('visible');
        } else {
            $(tag).removeClass('visible');
        }
    }
});
$(window).on('load', function () {
    if ($(window).width() < 400) {
        $('img').removeClass('col s6 flow-text');
        $('h5').removeClass('col s6 flow-text');
    }
});


