
$('.site-nav').removeClass('show'); //for hide mobile navigation
$('.site-header__box').removeClass('show'); //for hide mobile navigation

$(document).ready(function(){
    $(".logo").delay(1000).fadeIn('slow');
    $(".section-1__head").delay(1500).fadeIn('slow');
    $(".button-contact-us").delay(1500).fadeIn('slow');
    $("#scroll").delay(4000).fadeIn('slow');
    // random padding for catalog items
    function RandomPaddingCatalog() {
        $(".random-padding-top-js").each(function() {
            var random = Math.round(Math.random() * 50) + 100;
            $(this).css("padding-top",random);
            console.log(random + "px")
        });
    }
    //RandomPaddingCatalog();
});

//slick slider
$(document).ready(function(){
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true
    });
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    $('.gallery').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow: '<div class="slider-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="30px"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        nextArrow: '<div class="slider-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="30px" transform="rotate(180)"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        // nextArrow: '<img class="slider-right" src="../images/slider-right.svg" alt="" width="16" height="19">',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1359,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            ,
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });
    $('.order-conditions').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow: '<div class="slider-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        nextArrow: '<div class="slider-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px" transform="rotate(180)"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1359,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.gallery-footer').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow: '<div class="slider-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        nextArrow: '<div class="slider-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px" transform="rotate(180)"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        // nextArrow: '<img class="slider-right" src="../images/slider-right.svg" alt="" width="16" height="19">',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1370,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });
    $('.catalog-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow: '<div class="slider-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        nextArrow: '<div class="slider-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px" transform="rotate(180)"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        // nextArrow: '<img class="slider-right" src="../images/slider-right.svg" alt="" width="16" height="19">',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1359,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });
    $('.goods-view__slider_big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.goods-view__slider_min'
    });
    $('.goods-view__slider_min').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.goods-view__slider_big',
        dots: false,
        centerMode: true,
        centerPadding: '5px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '0'
                }
            }
        ]
    });
    $('.recommended-products__box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow: '<div class="slider-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        nextArrow: '<div class="slider-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px" transform="rotate(180)"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            ,
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});


//mobile menu
$(document).ready(function(){
    $('.toggle').on('click', function(){
        $('.site-nav').toggleClass('show');
        $('.social-network').toggleClass('social-network-mobile');
        $('.lang').toggleClass('lang-mobile');
    });

    $('.toggle-1').on('click', function(){
        $('.site-header__box').toggleClass('show-1');
    });
});

// mobile search form section-1
$('.section-1__search').click(function() {
    if($(window).width()<600){
        $('.section-1__search').addClass('section-1__search-js');
        $('.logo').css("visibility", "hidden");
    }
});
// mobile search form header
$('.header__search').click(function() {
    if($(window).width()<600){
        $('.header__search').addClass('search-form-js');
        $('.site-header__logo').css("visibility", "hidden");
    }
});

// $(document).ready(function(){
//     $('.site-header').affix({
//         offset: {
//             top: $('.section-1').height()-$('.site-header').height()
//         }
//     });
// });

//fixed and fadein navigation
$(document).ready(function(){
    var element = $('#header-main'); //.site-header
    var section1 = $('.wrap-section-1');
    var section2 = $('.section-2');
    var elementHeight = element.height();
    var height = $(window).height() - elementHeight; //$(window).height() - 70
    // var body = $('body');
    // var bodyHeight = body.outerHeight(true);
    // var scrolledBlock = $('.scrolled-block');
    // var sbWidth = scrolledBlock.width();
    // var winHeight = $(window).height();
    // var maxScroll = bodyHeight - winHeight;
    // var coeff = maxScroll/(sbWidth-elementWidth);
    $(window).scroll(function() {
        var $this = $(this);

        if ($this.scrollTop() > height) { //($this.scrollTop() > 960)
            // section1.css("display", "none"); // для анімаціїї при скролі вверх
            section2.css("margin-top", "100vh");
            element.addClass('header-fixed').css("opacity", "1");
            $('.section-1__header').css("opacity", "0");
        } else {
            // section1.css("display", "block"); // для анімаціїї при скролі вверх
            section2.css("margin-top", "0");
            element.removeClass('header-fixed').css("opacity", "0");
            $('.section-1__header').css("opacity", "1");
        }
    });
});

// /*GO TO href*/
var goTo = (function(){
    $('.js-scroll-link').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-65;
        $('body,html').animate({scrollTop: target}, 1500);
    });
})();


// animate catalog
// $(document).ready(function(){
//     var element = $('.catalog__item');
//     var height = $(window).height() * 4 -200;
//
//     $(window).scroll(function() {
//         var $this = $(this);
//
//         if ($this.scrollTop() > height) {
//             element.addClass('catalog__animate-2');
//             // element.css("right", "0");
//         } else {
//             element.removeClass('catalog__animate-2');
//         }
//     });
// });


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