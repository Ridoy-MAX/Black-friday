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
