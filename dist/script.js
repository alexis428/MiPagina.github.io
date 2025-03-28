$(document).ready(function(){
  // Inicializar slider con fade
  $('#slider').fadeIn('slow');
  
  // Sticky header
  $("#sticker").sticky({topSpacing:0});
  
  // Smooth scroll
  $("a").on('click', function(event) {
    if (this.hash !== "") {  
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000);
    }
  });

  // Fixed menu colors
  $(window).on('scroll', function () {
    var pixels = 50;
    if ($(window).scrollTop() > pixels) {
      $('.nav').addClass('fixed');
      $('.menu a, .logo').css({"color":"#354757"});
    } else {
      $('.nav').removeClass('fixed');
      $('.menu a, .logo').css({"color":"#FEFFFF"});
    }
  });

  // Trigger initial scroll check
  $(window).trigger('scroll');
  
  // Slider navigation
  let currentSlide = 0;
  const totalSlides = $('#slider figure ul li').length;
  
  $('.next').click(function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });
  
  $('.prev').click(function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });
  
  function updateSlider() {
    const position = currentSlide * -100;
    $('#slider figure').css('transform', `translateX(${position}%)`);
  }
});