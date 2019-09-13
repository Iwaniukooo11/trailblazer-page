// import lightGallery from 'lightGallery'

// lightGallery(document.getElementById('lightGallery'))

const nav = document.querySelector('.nav')
const navCloser = document.querySelector('.closer')

const burger = document.querySelector('.burger')
const lastLine = document.querySelector('.burger__line--last')

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
