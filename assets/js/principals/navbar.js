import { onAuthStateChanged, auth } from "../firebase/principal.js";

const navbarLinksBase = [
  { label: "Home", href: "../index.html" },
  { label: "About", href: "/pages/about.html" },
  { label: "Pricing", href: "/pages/pricing.html" },
  { label: "Contact us", href: "/pages/contact.html" },
];

const paginasProtegidas = [
  "/pages/usuario.html",
  "/pages/carrinho.html"
];

// Função que monta a navbar
function renderNavbar(links) {
  const navbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center gap-2" href="../index.html">
          <img src="../assets/imgs/NexusLogo.svg" alt="Logo" width="24" height="24">
          Nexus Inc
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            ${links.map(link => `
              <li class="nav-item">
                <a class="nav-link" href="${link.href}">${link.label}</a>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </nav>
  `;

  document.getElementById("navbar-container").innerHTML = navbar;
}

// Aguarda DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar([...navbarLinksBase, { label: "Login", href: "/pages/login.html" }]);
});

onAuthStateChanged(auth, (user) => {
  const pathname = window.location.pathname;

  if (user) {
    const links = [
      ...navbarLinksBase,
      { label: "Carrinho", href: "/pages/carrinho.html" },
      { label: "Perfil", href: "/pages/usuario.html" }
    ];
    renderNavbar(links);
  } else {
    if (paginasProtegidas.includes(pathname)) {
      window.location.href = "/index.html";
    } else {
      renderNavbar([...navbarLinksBase, { label: "Login", href: "/pages/login.html" }]);
    }
  }
});
