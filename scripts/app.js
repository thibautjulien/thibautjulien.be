/* Animation reveal */

const ratio = .27
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r)
    })
})



/* Animation typewriter */

document.addEventListener("DOMContentLoaded", function() {
    const typewriterContainers = document.querySelectorAll('.typewriter-container');

    typewriterContainers.forEach(container => {
        const text = container.getAttribute('data-text');
        const typewriterText = container.querySelector('.typewriter-text');
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                typewriterText.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    });
});

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