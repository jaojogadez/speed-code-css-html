'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempClient = {
    nome: "Marcos",
    email: "marcos_roberto@gmail.com",
    tel: "14920002066",
    cidade: "Marília",
}

// CRUD - Create Read Update Delete
const createCliente = (client) => {
    localStorage.setItem("teste", "teste para o crud")
}




// Events
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)