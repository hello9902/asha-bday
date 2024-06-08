const customImages = [
    'image 9.jpeg',
    'image 10.jpeg',
    'image2.jpeg',
    'image4.jpeg'
];
let customCurrentIndex = 0;

function showNextCustomImage() {
    customCurrentIndex = (customCurrentIndex + 1) % customImages.length;
    document.getElementById('custom-slideshow-image').src = customImages[customCurrentIndex];
}

setInterval(showNextCustomImage, 2000); // Change image every 2 seconds
