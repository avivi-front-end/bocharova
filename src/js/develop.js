var prevAr = '<div class="slider-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>';
var nextAr='<div class="slider-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px" transform="rotate(180)"  opacity="0.4"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>';

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
        prevArrow:prevAr,
        nextArrow: nextAr,

    });
    $('.gallery').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow:prevAr,
        nextArrow: nextAr,
        responsive: [
            { breakpoint: 1800, settings: {slidesToShow: 4}},
            { breakpoint: 1480, settings: {slidesToShow: 3}},
            { breakpoint: 1359, settings: {slidesToShow: 3}},
            { breakpoint: 970, settings: {slidesToShow: 1}},
        ]
    });
    $('.order-conditions').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow:prevAr,
        nextArrow: nextAr,
        responsive: [
            {breakpoint: 970,settings: { slidesToShow: 2 }},
            {breakpoint: 680,settings: {slidesToShow: 1}}
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
            {breakpoint: 1500, settings: {centerPadding: '0'}}
        ]
    });
    $('.recommended-products__box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow:prevAr,
        nextArrow: nextAr,
        responsive: [
            {breakpoint: 1500,settings: {slidesToShow: 3}},
            {breakpoint: 1024,settings: {slidesToShow: 2}},
            {breakpoint: 710,settings: {slidesToShow: 1}}
        ]
    });
    $('.section-1__search').click(function() {
        if($(window).width()<600){
            $('.section-1__search').addClass('section-1__search-js');
            $('.logo').css("visibility", "hidden");
        }
    });
    $('.header__search').click(function() {
        if($(window).width()<600){
            $('.header__search').addClass('search-form-js');
            $('.site-header__logo').css("visibility", "hidden");
        }
    });
    $('.toggle').on('click', function(){
        $('.site-nav').toggleClass('show');
        $('.social-network').toggleClass('social-network-mobile');
        $('.lang').toggleClass('lang-mobile');
    });
    $('.toggle-1').on('click', function(){
        $('.site-header__box').toggleClass('show-1');
    });
    $(document).on('click', '#scroll', function () {
        gotoSecondBlock();
    });
    scrollMenu();
    goTo();
});
function goTo(){
    $(document).on('click', '.js-scroll-link', function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top;
        $('body, html').animate({scrollTop:target},500,function () {
            lastDirection = $(window).scrollTop();
        });
    });
}
 function scrollMenu() {
     var element = $('#header-main');
     var height = $(window).height() - element.height();
     $(window).scroll(function() {
         if ($(window).scrollTop() > height) {
             element.addClass('header-fixed');
             $('.section-1__header').css("opacity", "0");
         } else {
             element.removeClass('header-fixed');
             $('.section-1__header').css("opacity", "1");
         }
     });
 }
window.addEventListener('wheel', findScrollDirectionOtherBrowsers);
var isAnimating = false;
var lastDirection = 0;
function findScrollDirectionOtherBrowsers(event){
    toadLord = false;
    if($('#about').length > 0){
        var delta;
        if (event.wheelDelta) {
            delta = event.wheelDelta;
        } else {
            delta = -1 * event.deltaY;
        }
        if (delta < 0) {
            if($(window).scrollTop() < $(window).height()/2){
                if($(window).scrollTop() - lastDirection > 0 && !isAnimating ){
                    isAnimating = true;
                    $('body, html').stop().animate({scrollTop:($('#about').offset().top)},300,function () {
                        lastDirection = $(window).scrollTop();
                        isAnimating =false;
                    });
                }
            }
        } else if (delta > 0) {
            if($(window).scrollTop() <= $(window).height()){
                if($(window).scrollTop() - lastDirection < 0 && !isAnimating){
                    isAnimating = true;
                    $('body, html').stop().animate({scrollTop:0},300,function () {
                        lastDirection = $(window).scrollTop();
                        isAnimating =false;
                    });
                }
            }
        }
    }

}
function gotoSecondBlock() {
    $('body, html').stop().animate({scrollTop:($('#about').offset().top)},300,function () {
        lastDirection = $(window).scrollTop();
        isAnimating =false;
    });
}

$(window).on('load', function () {

    $('.preloader').css('opacity','0');
    setTimeout(function () {
        $('.preloader').remove();
        $(window).scrollTop(0);
        $('.animated').removeClass('animated');
    },200);
    $('.site-nav').removeClass('show');
    $('.site-header__box').removeClass('show');
    $(".logo").delay(500).fadeIn(500);
    setTimeout(function () {
        $(".section-1__head").addClass('animate-this');
    },1000);
    setTimeout(function () {
        $(".button-contact-us").addClass('animate-this');
    },1600);
    $("#scroll").delay(700).fadeIn(200);
});
