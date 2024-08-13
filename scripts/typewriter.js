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