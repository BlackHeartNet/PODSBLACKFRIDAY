let currentImage = 0;

function toggleImage() {
    const carouselInner = document.querySelector('.carousel-inner');
    currentImage = (currentImage + 1) % 2; // Alterna entre 0 e 1
    carouselInner.style.transform = `rotateY(${currentImage * 180}deg)`;
}

setInterval(toggleImage, 3000); // Troca de imagem a cada 3 segundos
