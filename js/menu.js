var tipoDeButao = document.getElementById('buttonMenu')
const botaoTop = document.querySelector(".upWebsite")

function mudouTamanho() {
    if (window.innerWidth >= 768){
        tipoDeButao.style.display = 'none'
        tipoDeButao.innerText = 'Close'
        tipoDeButao.style.color = 'red'
        menuWebsite.style.display = 'flex'
    } else {
        tipoDeButao.style.display = 'block'
        tipoDeButao.innerText = 'Menu'
        tipoDeButao.style.color = 'var(--cor3)'
        menuWebsite.style.display = 'none'
    }
}

function menuHamburguer() {
    if (menuWebsite.style.display == 'none') {
        menuWebsite.style.display = 'block'
        tipoDeButao.innerText = 'Close'
        tipoDeButao.style.color = 'red'
    } else {
        menuWebsite.style.display = 'none'
        tipoDeButao.innerText = 'Menu'
        tipoDeButao.style.color = 'var(--cor3)'
    }
}

window.addEventListener("scroll", function (event) {
    if (window.scrollY == 0) {
        botaoTop.classList.remove('visible')
    } else {
        botaoTop.classList.add('visible')
    }
})