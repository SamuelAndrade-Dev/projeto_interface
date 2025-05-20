const slides = document.querySelector('.container-imagens');
const images = document.querySelectorAll('.slider');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

let index = 0;

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}vw)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
});
