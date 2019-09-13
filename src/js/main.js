// import lightGallery from 'lightGallery'

// lightGallery(document.getElementById('lightGallery'))

const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const navCloser = document.querySelector('.closer')
const rocket = document.querySelector('.rocket')

const time = 800

const burger = document.querySelector('.burger')
const lastLine = document.querySelector('.burger__line--last')

navLinks.forEach(e => e.addEventListener('click', () => {
    setTimeout(() => {
        nav.classList.remove('on')
        navCloser.classList.remove('on')
        lastLine.classList.remove('on')
    }, time - 10)

}))

navCloser.addEventListener('click', () => {
    navCloser.classList.remove('on')
    nav.classList.remove('on');
    lastLine.classList.remove('on')
})

burger.addEventListener('click', () => {
    nav.classList.toggle('on')
    lastLine.classList.toggle('on')
    navCloser.classList.toggle('on')
})

window.addEventListener('scroll', () => rocket.style.transform = `translateX(25%) translateY(-${window.pageYOffset / 4}px)`)

import VanillaScrollspy from 'vanillajs-scrollspy';

const navbar = document.querySelector('.nav');
const scrollspy = new VanillaScrollspy(navbar, time);
scrollspy.init();
