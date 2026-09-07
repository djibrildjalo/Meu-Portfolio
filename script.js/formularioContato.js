// Elementos usados para abrir/fechar e preencher o formulário.
const botaoMensagem = document.querySelector('.botao');
const formularioContato = document.querySelector('.contato');

// Alterna a visibilidade do formulário e informa o estado para leitores de tela.
botaoMensagem.addEventListener('click', () => {
    formularioContato.classList.toggle('escondido');
    if ( formularioContato.classList.contains('escondido')) {
        botaoMensagem.textContent = 'Enviar mensagem';
        botaoMensagem.setAttribute('aria-expanded', 'false');
    } else {
        botaoMensagem.textContent = 'Fechar formulário';
        botaoMensagem.setAttribute('aria-expanded', 'true');
    }
});

formularioContato.addEventListener('submit', function (event) {
    // O formulário será enviado para o WhatsApp, não para um servidor.
    event.preventDefault();

    // Captura os campos para validar os valores e montar a mensagem.
    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const comentario = document.querySelector('#comentario');

    // Remove os destaques de erro de uma tentativa anterior.
    [nome, email, comentario].forEach(function (campo) {
        campo.style.border = '';
    });

    // Valida o tamanho mínimo do nome antes de continuar.
    if (nome.value.trim().length < 3) {
        nome.style.border = '2px solid red';
        alert('O nome deve possuir pelo menos 3 caracteres.');
        nome.focus();
        return;
    }

    // Verifica se o e-mail possui o formato básico esperado.
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email.value.trim())) {
        email.style.border = '2px solid red';
        alert('Digite um e-mail válido.');
        email.focus();
        return;
    }

    // Exige uma mensagem com contexto suficiente para o contato.
    if (comentario.value.trim().length < 10) {
        comentario.style.border = '2px solid red';
        alert('O comentário deve possuir pelo menos 10 caracteres.');
        comentario.focus();
        return;
    }

    // Monta a mensagem e codifica o texto para uso seguro na URL do WhatsApp.
    const telefone = '5571992921723';
    const mensagem = `Olá! Meu nome é ${nome.value.trim()}.
Meu e-mail é: ${email.value.trim()}

Mensagem:
${comentario.value.trim()}`;
    const whatsappURL = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    // Abre uma nova conversa e limpa o formulário após o envio.
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    formularioContato.reset();
});
