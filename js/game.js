const grid = document.querySelector('.grid');
const personagens = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
    'img7',
    'img8',
    'img9',
    'img10',
];

const createCard = (personagem) => {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    front.style.backgroundImage = `url('../imagens/${personagem}.jpeg')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const carregarJogo = () => {
    personagens.forEach((personagem) => {
        const card = createCard(personagem);
        grid.appendChild(card)
    })
}


carregarJogo();


