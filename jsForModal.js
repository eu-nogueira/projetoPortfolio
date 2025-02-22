let openModal = document.querySelector('.modal')
let contato = document.querySelector('.contato')
let mainContainer = document.querySelector('.main-container')

openModal.addEventListener('click', function(e) {
    if (contato.style.display != 'block') {
    contato.style.display = 'block'
    } else {
    contato.style.display = 'none'
    }
})