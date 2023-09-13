'use strict'
const pessoas = [
    {
        nome: 'Naty 🤞',
        mensagem: 'Carol, manda as fotos!',
        tempo: '2 minutes ago',
        imagem: 'natalia.jpg',
    },
    {
        nome: "Lu 🤍",
        mensagem: 'Vamos fazer cookies?',
        tempo: '30 minutes ago',
        imagem: 'luisq.png',

    },
    {
        nome: 'Mãezinha 🌹',
        mensagem: 'Filha, você deu ração para o mike?!',
        tempo: '1 hour ago',
        imagem: 'maezinhaimage.jpg',
    }
]
const criarCard = (pessoas) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${pessoas.imagem}`
    imagem.alt = pessoas.name

    const nomeMsg = document.createElement('div')
    nomeMsg.classList.add('nomeMsg')

    const name = document.createElement('h2')
    name.textContent = pessoas.nome

    const mensagem = document.createElement('p')
    mensagem.classList.add('msg')
    mensagem.textContent = pessoas.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoas.tempo

    card.replaceChildren(imagem, nomeMsg, tempo)
    nomeMsg.replaceChildren(name, mensagem)

    return card
}

const mostrarCards = (pessoas) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(pessoas)
    cardContainer.appendChild(card)
}

pessoas.forEach(mostrarCards)