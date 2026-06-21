document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#F9C6D8', '#D8C6F9', '#C6DFF9', '#FDE8F4', '#EDD9FF', '#F9D6E8'];

    for (let i = 0; i < 35; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal-float';

        const size = 6 + Math.random() * 14;

        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.4}px`;
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];
        petal.style.animationDuration = `${8 + Math.random() * 12}s`;
        petal.style.animationDelay = `${Math.random() * 10}s`;

        document.body.appendChild(petal);
    }
});