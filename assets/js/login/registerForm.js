document.addEventListener("DOMContentLoaded", function () {
    const registerform = `
    <div class="tab-pane fade" id="registerTab" role="tabpanel">
      <sl-input id="regName" label="Nome" required></sl-input>
      <sl-input id="regEmail" label="E-mail" type="email" required></sl-input>
      <sl-input id="regPassword" label="Senha" type="password" required></sl-input>
      <br>
      <sl-button variant="success" class="w-100" onclick="registrar()">Registrar</sl-button>
    </div>
  `;

    document.getElementById("formTabsContent").insertAdjacentHTML('beforeend', registerform);
});
