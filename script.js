const typeEffect = (element, text, speed) => {
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, speed);
};
const typewriter = document.querySelector('.typewriter');
typeEffect(typewriter, "Hi, I'm Balasubramanian", 150);

const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

