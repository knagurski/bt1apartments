if (window.jQuery) {
  var $header = $('main > header')

  $header.next().css({marginTop: $header.height()})
  $header.addClass('fixed')
}
