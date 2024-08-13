/* Carousel */

document.addEventListener("DOMContentLoaded", function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = carouselTrack.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    function scrollCarousel() {
        currentIndex = (currentIndex + 1) % totalImages;
        const translateX = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
    }

    setInterval(scrollCarousel, 6000);
});