jQuery(document).ready(function($){

$('.circlechart').circlechart(); 
$(".number").counterUp({time:1000});

$('.navbar').on('shown.bs.collapse', function () {
   $('body').addClass('show-menu');
})

$('.navbar').on('hidden.bs.collapse', function () {
   $('body').removeClass('show-menu');
})



/*========================================*/ 
/* Gsap Animation Start */ 
/*========================================*/
gsap.registerPlugin(ScrollTrigger);

  const animateProcess = gsap.utils.toArray(".animate-child");
    animateProcess.forEach((title) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            once:true,
            start: 'top 90%', 
            toggleClass:'trigger',
          }
        })
    });
  window.onload = function () { 
    TweenMax.to ('.navbar', 1, {y:1, ease: "power2.out",})
    TweenMax.to ('.footer-social-list', 1, {y:1, opacity:1, ease: "power2.out",})
  }
/*========================================*/ 
/* Page loader Start */ 
// /*========================================*/
   setTimeout(function(){ 
   $('.preloader-box').fadeOut(500);
   $('.preloader-loader').slideUp(1000);
   }, 1500);
// /*================== END ======================*/

/*==========================*/ 
/* sliders */ 
/*==========================*/
if($('.profile-bg-slide').length > 0){
jQuery('.profile-bg-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1000,
    vertical: true,
    speed: 1000,
    arrows: false,
    dots: false,
});
}

/*==========================*/ 
/* testimonial */ 
/*==========================*/
if($('.testimonial-slider').length > 0){
jQuery('.testimonial-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: true, 
  infinite: true, 
  prevArrow: $('.t-prev'),
  nextArrow: $('.t-next'),
  centerMode: false, 
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,  
        adaptiveHeight: false
      }
    }
  ] 
});
};

/*==========================*/ 
/* testimonial */ 
/*==========================*/
if($('.grid-slider').length > 0){
jQuery('.grid-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: true, 
  infinite: true, 
  prevArrow: $('.g-prev'),
  nextArrow: $('.g-next'),
  centerMode: false, 
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,  
        adaptiveHeight: false
      }
    }
  ] 
});
};

/*==========================*/ 
/* testimonial */ 
/*==========================*/
if($('.grid-slider_2').length > 0){
jQuery('.grid-slider_2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: true, 
  infinite: true, 
  prevArrow: $('.g_2-prev'),
  nextArrow: $('.g_2-next'),
  centerMode: false, 
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,  
        adaptiveHeight: false
      }
    }
  ] 
});
};

/*==========================*/  
/* patients  Slider */  
/*==========================*/ 
if($('.portfolio-img-slider').length > 0){
    $('.portfolio-img-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio-text-slider',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1330,
            settings: {
                dots: false
            }
        }]
    });
    $('.portfolio-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        fade: true,
        speed: 1000,
        arrows: true,
        prevArrow: $('.p-prev'),
        nextArrow: $('.p-next'),
        dots: false,
        asNavFor: '.portfolio-img-slider'
    });
  }
 

/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));


/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});




/****************************************/
// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var typed = new Typed('#typed', {
   stringsElement: '#typed-strings',
   typeSpeed: 80,
   loop: true
   
});
/**************** END ******************/


/**************** Progress ******************/
function makesvg(percentage, inner_text=""){

  var abs_percentage = Math.abs(percentage).toString();
  var percentage_str = percentage.toString();
  var classes = ""

  if(percentage < 0){
    classes = "danger-stroke circle-chart__circle--negative";
  } else if(percentage > 0 && percentage <= 30){
    classes = "warning-stroke";
  } else{
    classes = "success-stroke";
  }

 var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
     + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
     + '<circle class="circle-chart__circle '+classes+'"'
     + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
     + '<g class="circle-chart__info">'
     + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';

  if(inner_text){
    svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
  }
  
  svg += ' </g></svg>';
  
  return svg
}

(function( $ ) {

    $.fn.circlechart = function() {
        this.each(function() {
            var percentage = $(this).data("percentage");
            var inner_text = $(this).text();
            $(this).html(makesvg(percentage, inner_text));
        });
        return this;
    };

}( jQuery ));



/*=====================================================================*/
(function($) {
    "use strict"; // Start of use strict


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: 70
    });

})(jQuery); // End of use strict