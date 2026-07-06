// elementos selecionados para pegar os elementos do DOM
const botaoMensagem = document.querySelector('.botao');
const formularioContato = document.querySelector('.contato');

// O clique
botaoMensagem.addEventListener('click', () => {
    formularioContato.classList.toggle('escondido');
    if ( formularioContato.classList.contains('escondido')) {
        botaoMensagem.textContent = 'Enviar mensagem';
    } else{
        botaoMensagem.textContent = 'Cancelar envio';
    }
});

// seleciona o formulário
const formulario = document.querySelector('.contato');

// seleciona os campos pela classe
const campos = document.querySelectorAll('.mensagem');

formulario.addEventListener('submit', function(event) {

    // impede o envio do formulário
    event.preventDefault();

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const comentario = document.querySelector("#comentario");

    // remove bordas anteriores
    nome.style.border = "";
    email.style.border = "";
    comentario.style.border = "";

    // validação do nome
    if (nome.value.trim().length < 3) {
        nome.style.border = "2px solid red";
        alert("O nome deve possuir pelo menos 3 caracteres.");
        nome.focus();
        return;
    }

    // validação do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email.value)) {
        email.style.border = "2px solid red";
        alert("Digite um e-mail válido.");
        email.focus();
        return;
    }

    // validação do comentário
    if (comentario.value.trim().length < 10) {
        comentario.style.border = "2px solid red";
        alert("O comentário deve possuir pelo menos 10 caracteres.");
        comentario.focus();
        return;
    }

    // sucesso
    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});