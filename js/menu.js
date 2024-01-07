function mudouTamanho() {
    if (window.innerWidth >= 768){
        menuWebsite.style.display = 'flex'
        buttonMenu.style.display = 'none'
    } else if (menuWebsite.style.display == 'flex') {
        buttonMenu.style.display = 'flex'
        menuWebsite.style.display = 'none'
        buttonMenu.innerText = '☰'
        buttonMenu.style.color = 'var(--cor3)'
    } else {return}
}

function menuHamburguer() {
    if (menuWebsite.style.display == 'flex') {
        menuWebsite.style.display = 'none'
        buttonMenu.innerText = '☰'
        buttonMenu.style.color = 'var(--cor3)'
    } else {
        menuWebsite.style.display = 'flex'
        buttonMenu.innerText = '✖'
        buttonMenu.style.color = 'red'
    }
}

window.addEventListener("scroll", function (event) {
    if (window.scrollY == 0) {
        upWebsite.classList.remove('visible')
    } else {
        upWebsite.classList.add('visible')
    }
})