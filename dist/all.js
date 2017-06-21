'use strict';

$(function () {

  //dynamic background img resize

  $(window).on('load resize', function () {
    $('.top-background-img').css('height', window.innerHeight);
  });

  //bootsrap scrollspy

  $('body').scrollspy({
    target: '.navbar',
    offset: 50
  });

  //smooth scrolling, not dry though :(

  $(".nav-home").click(function () {
    $("html, body").animate({
      scrollTop: $('#home').offset().top -= 50
    }, 1000);
  });
  $(".nav-skills").click(function () {
    $("html, body").animate({
      scrollTop: $('#skills').offset().top -= 50
    }, 1000);
  });
  $(".nav-projects").click(function () {
    $("html, body").animate({
      scrollTop: $('#projects').offset().top -= 50
    }, 1000);
  });
  $(".nav-about").click(function () {
    $("html, body").animate({
      scrollTop: $('#about').offset().top -= 49
    }, 1000);
  });
  $(".result").hover(function () {
    $(this).toggleClass("result_hover");
  });

  //parallax scrolling
  $(window).stellar({
    horizontalScrolling: false,
    verticalOffset: 0,
    horizontalOffset: 0
  });
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