let currentImage = 1;
const totalImages = 2;

function toggleImage() {
    const imgElement1 = document.getElementById('podImage');
    const imgElement2 = document.getElementById('podImage2');
    
    if (currentImage === 1) {
        imgElement1.style.display = 'none';
        imgElement2.style.display = 'block';
        currentImage = 2;
    } else {
        imgElement1.style.display = 'block';
        imgElement2.style.display = 'none';
        currentImage = 1;
    }
}

setInterval(toggleImage, 3000); // Troca de imagem a cada 3 segundos
