$(() => {
  $(window).on('load resize', () => {
    $('.top-background-img').css('height', window.innerHeight)
  })
})

document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.element', {
      strings: ["HTML5.", "CSS3.", "SASS.", "LESS.", "JavaScript.", "jQuery.", "AngularJS.", "NodeJS.", "Express JS.", "MassiveJS.", "SQL.", "PostgreSQL.",],
      typeSpeed: 50,
      startDelay: 500,
      backSpeed: 35,
      shuffle: false,
      backDelay: 1500,
      loop: true,
      loopCount: null
    });
});
