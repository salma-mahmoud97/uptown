// show nav
$(document).ready(function () {
  $("i.icona").click(function () {
    $(".list").slideToggle();
  });
});

// sticky navbar
$(window).scroll(function () {
  var scr = $(this).scrollTop();
  if (scr > 100) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
  // scroll-top
  if(scr>800){
    $('.scroll-top').fadeIn();
  }else{
     $('.scroll-top').fadeOut();
  }
});
$('.scroll-top').click(function(){
  $('body,html').animate({
    scrollTop:0
  },500)
})
// nav2 collor active on click li
$(".nav2 li").click(function () {
  $(this).addClass("active-btn").siblings().removeClass("active-btn");

  var allId = $(this).attr("id");
  if (allId === "all") {
    $(".portfolio-content> div").fadeIn();
  } else {
    $(".portfolio-content> div").fadeOut();
    $(".portfolio-content")
      .contents()
      .filter("." + allId)
      .fadeIn();
  }
});

// smooth scrol
$(".list a").click(function () {
  $("body,html").animate({
    scrollTop: $($(this).attr("href")).offset().top,
  });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
