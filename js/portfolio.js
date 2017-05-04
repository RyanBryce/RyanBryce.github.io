$(() => {
  $(window).on('load resize', () => {
    $('.top-background-img').css('height', window.innerHeight)
  })
})
