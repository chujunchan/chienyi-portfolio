$(function() {
  console.log('Hello Bootstrap5');
});

// jquery
$(document).ready(function () {
  $('.scrollto').click(function (e) {

    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPos }, 1000);
  });
  
  //滾動高度
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // console.log(scrollPos, windowHeight);


    $('.scrollto').each(function () {
      var target = $(this).attr('href');
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
        $('.scrollto').removeClass('active')
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });   
  })
});

// swiper
var swiper = new Swiper(".workSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768:{
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }
});