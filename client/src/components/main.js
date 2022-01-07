import React, {Component} from 'react';

import $ from "jquery";
import slick from 'slick-carousel';

const toptd = document.querySelectorAll('.nav__head'),
      content = document.querySelectorAll('.nav__minmenu');


toptd.forEach(i => {
	i.addEventListener('click', e =>{
	    const currTab = e.target.dataset.btn;
	    for(let i = 0; i < content.length; i++){
	        content[i].classList.add('d-none');
	        if(content[i].dataset.content === currTab){
	            content[i].classList.remove('d-none');
	        }
	    }
	});
});
$(document).mouseup(function (e) {
    var container = $(".nav__minmenu");
    if (container.has(e.target)){
        $('.nav__minmenu').addClass('d-none');
    };
});
const face = document.querySelector('.nav__fc'),
      prof = document.querySelector('.nav__prof');

if(face){
face.addEventListener('click', e =>{
	    prof.classList.remove('d-none');
});}
$(document).mouseup(function (e) {
    var container = $(".nav__prof");
    if (container.has(e.target)){
        $('.nav__prof').addClass('d-none');
    };
});
const burg = document.querySelectorAll('.live__burg'),
      lmenu = document.querySelectorAll('.live__menu');

burg.forEach(i => {
    i.addEventListener('click', e =>{
        const currMenu = e.target.dataset.btn;
        for(let i = 0; i < lmenu.length; i++){
            lmenu[i].classList.add('d-none');
            if(lmenu[i].dataset.content === currMenu){
                lmenu[i].classList.remove('d-none');
            }
        }
    });
})

$(document).mouseup(function (e) {
    var container = $(".live__menu");
    if (container.has(e.target)){
        $('.live__menu').addClass('d-none');
        $('.live__burg').removeClass('live__item_active');
    };
});

$(function(){
    $('.live__burg').click(function(){
        $(this).addClass('live__item_active');
    });
    $('.nav__open').click(function(){
        $('.menu-op').removeClass('d-none');
    });
    $('.nav__close').click(function(){
        $('.menu-op').addClass('d-none');
    });
    $('.live__slider').slick({
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 1,               
        dots: true,
        draggable: true,  
        arrows:true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              }
            }, {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                }
            }, {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
  });
    $('.top__slider').slick({
        slidesToShow: 9,
        centerMode: false,
        slidesToScroll: 1,               
        dots: true,
        draggable: true,
        arrows:true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i><i class="fas fa-arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i><i class="fas fa-arrow-right"></button>',
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 6,
              }
            }, {
                breakpoint: 767,
                settings: {
                  slidesToShow: 4,
                }
            }, {
                breakpoint: 575,
                settings: {
                  slidesToShow: 3,
                }
            }
        ]
    });
});