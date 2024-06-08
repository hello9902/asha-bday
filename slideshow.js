const images = [
    'image5.jpeg',
    'image 6.jpeg',
    'image 7.jpeg',
    'image8.jpeg'
];
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow-image').src = images[currentIndex];
}

setInterval(showNextImage, 2000); // Change image every 2 seconds
