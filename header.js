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