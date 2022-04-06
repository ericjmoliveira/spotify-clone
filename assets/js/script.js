const menuButton = document.querySelector('.menu__button');
const menuButtonTopBar = document.querySelector('.button--top-bar');
const menuButtonMiddleBar = document.querySelector('.button--middle-bar');
const menuButtonBottomBar = document.querySelector('.button--bottom-bar');
const navbar = document.querySelector('.header__navbar');
const navLinks = document.querySelectorAll('.navbar__list li a');

menuButton.addEventListener('click', () => {
    menuButtonTopBar.classList.toggle('top-bar--active');
    menuButtonMiddleBar.classList.toggle('middle-bar--active');
    menuButtonBottomBar.classList.toggle('bottom-bar--active');
    navbar.classList.toggle('navbar--active');
    document.body.classList.toggle('body--fixed');
});
