import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const nextSlideBtnAMe = document.querySelector('.swiper-button-next-aboutme');
const swiperContainer = document.querySelector('.swiper-aboutme');
const acContainerClass = document.querySelector('.accordion-container-aboutme');

//second block - accordion
new Accordion(acContainerClass, {
    duration: 600,
    openOnInit: [0],

    elementClass: 'ac-aboutme',
    triggerClass: 'ac-header-aboutme',
    panelClass: 'ac-panel-aboutme',
    activeClass: 'is-active-aboutme',

    showMultiple: true,
})

//third block - swiper
const swiperAboutme = new Swiper(swiperContainer, {
    wrapperClass: 'swiper-wrapper-aboutme',
    slideClass: 'swiper-slide-aboutme',
    slideActiveClass: 'swiper-slide-active-aboutme',

    direction: 'horizontal',
    loop: true,
    modules: [Navigation, Keyboard],

    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        1440: {
            slidesPerView: 6,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next-aboutme',
    },

    nested: true,
    
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }
})

nextSlideBtnAMe.addEventListener('click', e => {
    swiperAboutme.slideNext();
})