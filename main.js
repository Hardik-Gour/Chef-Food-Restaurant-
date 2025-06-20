// Section image black overlay thin sheet  effect start here
let lastScrollY = 0;

function smoothScrollEffect() {
    const overlay = document.querySelector('.overlay');
    const scrollY = window.scrollY;

    // Smooth transition effect using interpolation
    lastScrollY += (scrollY - lastScrollY) * 0.1;

    overlay.style.transform = `translateX(-${lastScrollY * 0.5}px)`;

    requestAnimationFrame(smoothScrollEffect);
}

// Start animation loop
smoothScrollEffect();






const bar = document.querySelector('.bar .fa-bars');
const arrow = document.querySelector('#arrow');
const headerBar = document.querySelector('.header-bar');

bar.addEventListener('click', () => {
    headerBar.classList.add('active');
    document.body.style.overflow = 'hidden';
});

arrow.addEventListener('click', () => {
    headerBar.classList.remove('active');
    document.body.style.overflow = 'auto';
});









