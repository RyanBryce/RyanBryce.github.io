'use strict';

$(function () {
  $(window).on('load resize', function () {
    $('.top-background-img').css('height', window.innerHeight);
  });
});
