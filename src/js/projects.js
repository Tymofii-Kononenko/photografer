import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.project-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    direction: 'horizontal',
    speed: 600,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: true,
});

const nextButton = document.querySelector('.swiper-btn-next');
const prevButton = document.querySelector('.swiper-btn-prev');

const updateNavigationButtons = () => {
    if (swiper.activeIndex === swiper.slides.length - 1) {
        nextButton.setAttribute('disabled', true);
        nextButton.classList.add('disabled');
    } else {
        nextButton.removeAttribute('disabled');
        nextButton.classList.remove('disabled');
    }

    if (swiper.activeIndex === 0) {
        prevButton.setAttribute('disabled', true);
        prevButton.classList.add('disabled');
    } else {
        prevButton.removeAttribute('disabled');
        prevButton.classList.remove('disabled');
    }
};

swiper.on('slideChange', updateNavigationButtons);

updateNavigationButtons();
