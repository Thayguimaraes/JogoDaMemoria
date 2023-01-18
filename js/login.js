const nomeUsuario = document.querySelector('.nomeLogin');
const botao = document.querySelector('.botaoLogin');
const form = document.querySelector('.form_login');

const validaInput = ({ target }) => {
    if(target.value.length > 2){
        botao.removeAttribute('disabled');
       return
    }

    botao.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('jogador', nomeUsuario.value);
    window.location = 'paginas/game.html';
}

nomeUsuario.addEventListener('input', validaInput);
form.addEventListener('submit', handleSubmit);