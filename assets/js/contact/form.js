import { Alerts } from '../principals/alerts.js';
import { db, collection, addDoc } from '../firebase/principal.js';

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = form.querySelector('sl-input[name="name"]');
    const email = form.querySelector('sl-input[name="email"]');
    const message = form.querySelector('sl-textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        Alerts('danger', 'Preencha todos os campos');
        return;
    }

    try {
        await addDoc(collection(db, "mensagens"), {
            nome: name.value.trim(),
            email: email.value.trim(),
            mensagem: message.value.trim(),
            data: new Date()
        });

        Alerts('success', 'Mensagem enviada com sucesso!');
        form.reset(); 
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        Alerts('danger', 'Erro ao enviar mensagem. Tente novamente.');
    }
});
