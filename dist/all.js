'use strict';

$(function () {
  $(window).on('load resize', function () {
    $('.top-background-img').css('height', window.innerHeight);
  });
});
$(".result").hover(function () {
  $(this).toggleClass("result_hover");
});

document.addEventListener('DOMContentLoaded', function () {
  Typed.new('.element', {
    strings: ["HTML5.", "CSS3.", "SASS.", "LESS.", "JavaScript.", "jQuery.", "AngularJS.", "Bootstrap3.", "NodeJS.", "NPM.", "Express JS.", "MassiveJS.", "SQL.", "PostgreSQL.", "React."],
    typeSpeed: 50,
    startDelay: 500,
    backSpeed: 35,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: null
  });
});