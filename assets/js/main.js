const menuButton = document.querySelector('.menu__button');
const menuButtonTopBar = document.querySelector('.button--top-bar');
const menuButtonMiddleBar = document.querySelector('.button--middle-bar');
const menuButtonBottomBar = document.querySelector('.button--bottom-bar');
const navbar = document.querySelector('.header__navbar');
const links = document.querySelectorAll('.navbar__list li');

// Handles the mobile menu
menuButton.addEventListener('click', () => {
    menuButtonTopBar.classList.toggle('top-bar--active');
    menuButtonMiddleBar.classList.toggle('middle-bar--active');
    menuButtonBottomBar.classList.toggle('bottom-bar--active');
    document.body.classList.toggle('body--fixed');

    navbar.classList.toggle('navbar--enabled');

    links.forEach((link, index) => {
        if (navbar.classList.contains('navbar--enabled')) {
            link.style.animation = `animateLinks .5s ${0.025 * index}s`;
        } else {
            link.style.animation = '';
            navbar.style.transition = 'transform 0.25s 0.25s ease-in';
            setTimeout(() => {
                navbar.style.transition = '';
            }, 1000);
        }
    });
});
