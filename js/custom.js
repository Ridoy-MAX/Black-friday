

 
/*=============== banner ===============*/
$(document).ready(function(){ 
 $('.slider-bg').slick({
  autoplaySpeed: 1800, 
  dots: false,
 
  slidesToShow:4,
  arrows:true,
});   
  //slider start;
$('.slider').slick({
   
    autoplaySpeed: 1800, 
    dots: false,
   
    slidesToShow:4,
    arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
      
        }
      },
      {
        breakpoint: 768,
        settings: {
     
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

    });




});      







/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal(`.easy-writing, .img`,{delay: 400})
sr.reveal(`.quality`,{delay: 300})
sr.reveal(`.banner-slider, .footer`,{delay: 300, origin: 'top'})

sr.reveal(`.work, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 50})
sr.reveal(`.our-feature, .discount__animate`,{origin: 'left', interval: 50})

sr.reveal(``,{origin: 'top'})
sr.reveal(``)


