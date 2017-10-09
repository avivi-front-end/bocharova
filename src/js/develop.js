// $('.testimonials').slick();
$(document).ready(function(){
    $(".logo").delay(1000).fadeIn('slow');
    $(".section-1__head").delay(1500).fadeIn('slow');
    $(".button-contact-us").delay(1500).fadeIn('slow');
    $("#scroll").delay(4000).fadeIn('slow');
});

$(document).ready(function(){

    $('.testimonials').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<div class="slider-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        nextArrow: '<div class="slider-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px" transform="rotate(180)"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        // nextArrow: '<img class="slider-right" src="../images/slider-right.svg" alt="" width="16" height="19">',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true
    });
});


// $(document).ready(function(){
//     $('.site-header').affix({
//         offset: {
//             top: $('.section-1').height()-$('.site-header').height()
//         }
//     });
// });


//fixed navigation
$(document).ready(function(){
    var element = $('.site-header');
    // var elementWidth = element.width();
    // var body = $('body');
    // var bodyHeight = body.outerHeight(true);
    // var scrolledBlock = $('.scrolled-block');
    // var sbWidth = scrolledBlock.width();
    // var winHeight = $(window).height();
    // var maxScroll = bodyHeight - winHeight;
    // var coeff = maxScroll/(sbWidth-elementWidth);

    $(window).scroll(function() {
        var $this = $(this);

        if ($this.scrollTop() > 960) {
            element.addClass('header-fixed');
        } else {
            element.removeClass('header-fixed');
        }
    });
});
$(document).ready(function(){
    var element = $('.about-us__fade-in');

    $(window).scroll(function() {
        var $this = $(this);

        if ($this.scrollTop() > 750) {
            element.addClass('section-2__animation');
            element.css("right", "0");
        } else {
            element.removeClass('section-2__animation');
        }
    });
});







// jQuery(function(f){
//     var element = f('.button-contact-us');
//     f(window).scroll(function(){
//         element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
//     });
// });


// $(window).on('load', function () {
//     var $preloader = $('.button-contact-us'),
//         $spinner   = $preloader.find('.spinner');
//     $spinner.fadeOut();
//     $preloader.delay(350).fadeOut('slow');
// });
//


// //зникнення елемента при прокрутці  http://gnatkovsky.com.ua/poyavlenie-ischeznovenie-elementa-pri-prokrutke-stranicy-jquery.html
// jQuery(function(f){
//     var element = f('.button-contact-us');
//     f(window).scroll(function(){
//         element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
//     });
// });