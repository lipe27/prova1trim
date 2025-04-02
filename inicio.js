// script.js
document.addEventListener('DOMContentLoaded', () => {
    const arrows = document.querySelectorAll('.arrow');

    arrows.forEach((arrow) => {
        arrow.style.transition = 'transform 0.5s ease-in-out';
        setInterval(() => {
            arrow.style.transform = 'scale(1.2)';
            setTimeout(() => {
                arrow.style.transform = 'scale(1)';
            }, 500);
        }, 1000);
    });
});
