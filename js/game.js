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

let primeiraCarta = '';
let segundaCarta = '';

const compararCartar = () => {
    const primeiroPersonagem = primeiraCarta.getAttribute('data-personagem');
    const seundoPersonagem = segundaCarta.getAttribute('data-personagem');

    if(primeiroPersonagem == seundoPersonagem){

        
    }else {
        setTimeout(() => {
            primeiraCarta.classList.remove('revela-carta');
            segundaCarta.classList.remove('revela-carta');
        }, 500);
       
    }
    
}

const revelaCarta = ({target}) => {

    if(target.parentNode.className.includes('revela-carta'))
    {
        return
    }

    if(primeiraCarta == ''){
        target.parentNode.classList.add('revela-carta');   
        primeiraCarta = target.parentNode;
    } else if(segundaCarta == ''){
        target.parentNode.classList.add('revela-carta'); 
        segundaCarta = target.parentNode;
    }
    

}

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

    card.addEventListener('click', revelaCarta)
    card.setAttribute('data-personagem', personagem);

    return card;
}

const carregarJogo = () => {
    const embaralharCartas= personagens.sort(() => Math.random() - 0.5);
    embaralharCartas.forEach((personagem) => {
        const card = createCard(personagem);
        grid.appendChild(card)
    })
}


carregarJogo();


