const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

let currentSlide = 0;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    changeSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    changeSlide();
});

setInterval(() => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    changeSlide();
}, 5000);
