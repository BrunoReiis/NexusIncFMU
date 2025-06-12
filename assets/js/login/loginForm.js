document.addEventListener("DOMContentLoaded", function () {
    const loginform = `
    <div class="tab-pane fade show active" id="loginTab" role="tabpanel">
      <sl-input id="loginEmail" label="E-mail" type="email" required></sl-input>
      <sl-input id="loginPassword" label="Senha" type="password" required></sl-input>
      <br>
      <sl-button variant="primary" class="w-100" onclick="login()">Entrar</sl-button>
    </div>
  `;

    document.getElementById("formTabsContent").insertAdjacentHTML('beforeend', loginform);
});
