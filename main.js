addNavMenu();

function addNavMenu() {
    const button = document.querySelector('#header-burger');
    const nav = document.querySelector('#header-nav');
    const body = document.body

    button.addEventListener('click', function(event) {
        const elementsToActive = [button, nav];
        elementsToActive.forEach(toggleActiveClass);
        body.classList.toggle('lock');
    })
}

function toggleActiveClass(element) {
    element.classList.toggle('active');
}

addSliders();

function addSliders() {
    const swiper = new Swiper('.swiper', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        autoHeight: true,
        simulateTouch: false,
        touchRadio: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
    })
    const swiperOfBackgrounds = new Swiper('.swiper-backgrounds', {
        loop: true,
    })
    
    swiperOfBackgrounds.controller.control = swiper;
    swiper.controller.control = swiperOfBackgrounds;
}