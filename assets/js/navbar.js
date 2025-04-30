document.addEventListener("DOMContentLoaded", function () {
  //Links da Navbar
    const navbarLinks = [
      { label: "Home", href: "../index.html" },
      { label: "About", href: "/pages/about.html" },
      { label: "Pricing", href: "/pages/pricing.html" },
      { label: "Contact us", href: "/pages/contact.html" },
    ];
  
    //Criando a navbar com a função map para criar uma li para cada item da const nav
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
              ${navbarLinks.map(link => `
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
  });
  