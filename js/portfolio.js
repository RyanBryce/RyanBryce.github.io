$(() => {

  //dynamic background img resize

  $(window).on('load resize', () => {
    $('.top-background-img').css('height', window.innerHeight);
  });

  //bootsrap scrollspy

  $('body').scrollspy({
    target: '.navbar',
    offset: 50
  });

  //smooth scrolling

  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top -=50;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 1250);
});
  $(".result").hover(function () {
    $(this).toggleClass("result_hover");
  });

  //parallax scrolling
  $(window).stellar(
    {
    horizontalScrolling: false,
    verticalOffset: 0,
    horizontalOffset: 0
    }
  );

  // WOW.JS constructor func
  new WOW().init();
})

document.addEventListener('DOMContentLoaded', function(){
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
