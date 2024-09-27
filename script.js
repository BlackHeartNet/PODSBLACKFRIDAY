let currentImage = 1;

function toggleImage() {
    const imgElement = document.getElementById('podImage');
    currentImage = currentImage === 1 ? 2 : 1;
    imgElement.src = currentImage === 1 ? 'imagepod1.jpeg' : 'imagepod2.jpeg';
}

setInterval(toggleImage, 3000); // Troca de imagem a cada 3 segundos
