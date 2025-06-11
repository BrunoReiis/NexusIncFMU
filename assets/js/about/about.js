// Importa dados
import { ourTeam } from "../mockData.js";

// Criar um card para cada membro
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("team-container");
    ourTeam.forEach(member => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 d-flex justify-content-center mb-4";

        col.innerHTML = `
      <sl-card class="card-image text-center" style="max-width: 300px;">
        <img slot="image" src="${member.image}" alt="${member.name}" />
        <h3 slot="header" class="mb-0">${member.name}</h3>
        <div class="p-2">${member.role}</div>
      </sl-card>
    `;

        container.appendChild(col);
    });
});