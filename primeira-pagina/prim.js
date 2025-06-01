const slides = document.querySelector('.container-imagens');
const images = document.querySelectorAll('.slider');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');
const carrossel = document.getElementById('container-carrossel');
const scrollAmount = 300;

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

function scrollCarrossel(direction) {
    carrossel.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
} 