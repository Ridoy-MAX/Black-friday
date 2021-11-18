/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
  const header = document.getElementById('menu')
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== CHANGE BACKGROUND HEADER end ====================*/

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 300) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*==================== SHOW SCROLL UP ====================*/ 



$('.banner-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow:'<i class="fas fa-chevron-left  next-arrow"></i>',
  prevArrow:'<i class="fas fa-chevron-right  previous-arrow"></i>',
 
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



$('.owl-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fas fa-chevron-right  previous-arrow"></i>',
  nextArrow:'<i class="fas fa-chevron-left  next-arrow"></i>',
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




 /* Periodic Timer. Period is equal 10 days */
 $("#periodic-timer_period_days").syotimer({
  date: new Date(2015, 0, 1, 20),
  layout: "smhd",
  periodic: true,
  periodInterval: 10,
  periodUnit: "d",
});



// mega menu
$('.js-mega-menu').HSMegaMenu({
  event: 'hover',
  pageContainer: $('.container'),
  breakpoint: 767.98,
  hideTimeOut: 0
}); 