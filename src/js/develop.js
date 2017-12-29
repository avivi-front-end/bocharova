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
        responsive: [
            {breakpoint: 600,settings: {arrows: false }}
        ]
    });
    $('.gallery').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow:prevAr,
        nextArrow: nextAr,
        responsive: [
            { breakpoint: 1800, settings: {slidesToShow: 5}},
            { breakpoint: 1367, settings: {slidesToShow: 4}},
            { breakpoint: 1359, settings: {slidesToShow: 3}},
            { breakpoint: 970, settings: {slidesToShow: 2}},
            { breakpoint: 640, settings: {slidesToShow: 1, arrows: true}}
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
    $('.gallery-footer').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow:prevAr,
        nextArrow: nextAr,
        responsive: [
            {breakpoint: 1800,settings: { slidesToShow: 5}},
            {breakpoint: 1370,settings: {slidesToShow: 4}},
            {breakpoint: 1200, settings: { slidesToShow: 3 }},
            { breakpoint: 970,  settings: {  slidesToShow: 2 }},
            { breakpoint: 640, settings: {slidesToShow: 1, arrows: true}}
        ]
    });
    $('.catalog-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        prevArrow: prevAr,
        nextArrow: nextAr,
        responsive: [
            {breakpoint: 1359,settings: { slidesToShow: 3}},
            {breakpoint: 970,settings: {slidesToShow: 2}},
            {breakpoint: 650,settings: {slidesToShow: 1, arrows: true}}
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
    var element = $('#header-main');
    var section2 = $('.section-2');
    var elementHeight = element.height();
    var height = $(window).height() - elementHeight;
    $('.toggle').on('click', function(){
        $('.site-nav').toggleClass('show');
        $('.social-network').toggleClass('social-network-mobile');
        $('.lang').toggleClass('lang-mobile');
    });
    $('.toggle-1').on('click', function(){
        $('.site-header__box').toggleClass('show-1');
    });
    $(window).scroll(function() {
        var $this = $(this);
        if ($this.scrollTop() > height) {
            section2.css("margin-top", "100vh");
            element.addClass('header-fixed').css("opacity", "1");
            $('.section-1__header').css("opacity", "0");
        } else {
            section2.css("margin-top", "0");
            element.removeClass('header-fixed').css("opacity", "0");
            $('.section-1__header').css("opacity", "1");
        }
    });
});
$(window).on('load', function () {
    $('.preloader').css('opacity','0');
    setTimeout(function () {
        $('.preloader').remove();
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
