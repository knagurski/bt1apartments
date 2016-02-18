if (window.jQuery) {
    var $header = $('body > header');

    $header.next().css({marginTop: $header.height()});
    $header.addClass('fixed');
}