const side = document.querySelector('#side-nav')


addEventListener('scroll', () => {
    side.classList.toggle('side-active', window.scrollY > 100)


})