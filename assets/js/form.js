import { Alerts } from './alerts.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    //Previne que o form carregue para enviar o Alert
    event.preventDefault();

    //Pega os dados
    const name = form.querySelector('sl-input[name="name"]');
    const email = form.querySelector('sl-input[name="email"]');
    const message = form.querySelector('sl-textarea[name="message"]');

    //Verifica se nenhum dado está vazio
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        Alerts('danger', 'Preencha todos os campos');
        return; 
    }

    //Alert de sucesso
    Alerts('success', 'Mensagem enviada com sucesso!');
});