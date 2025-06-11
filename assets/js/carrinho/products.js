export const produtosPorCategoria = {
  "NexusBugTracker": [
    { id: 1, name: "Classic Plan", price: 9.00 },
    { id: 2, name: "Standard Plan", price: 40.00 },
    { id: 3, name: "Premium Plan", price: 150.00 },
  ],
  "Custom Websites": [
    { id: 4, name: "Classic Plan", price: 100.00 },
    { id: 5, name: "Standard Plan", price: 300.00 },
    { id: 6, name: "Premium Plan", price: 500.00 },
  ],
  "Websites Updates": [
    { id: 7, name: "Front-end", price: 20.00 },
    { id: 8, name: "Back-end", price: 100.00 },
    { id: 9, name: "Fullstack", price: 180.00 },
  ]
};

export function renderProductListGrouped(addToCartCallback) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  for (const categoria in produtosPorCategoria) {
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = categoria;
    categoryTitle.className = "w-100 text-center mt-4 mb-3";
    productList.appendChild(categoryTitle);

    const categoryContainer = document.createElement("div");
    categoryContainer.className = "d-flex gap-3 flex-wrap justify-content-center w-100 mb-4";

    produtosPorCategoria[categoria].forEach(produto => {
      const card = document.createElement("div");
      card.className = "card p-3 text-center";
      card.style.width = "180px";

      card.innerHTML = `
        <div class="mb-3">
          <strong>${produto.name}</strong><br />
          R$ ${produto.price.toFixed(2)}
        </div>
        <sl-button variant="primary" size="small" class="w-100">Adicionar</sl-button>
      `;

      const btn = card.querySelector("sl-button");
      btn.addEventListener("click", () => addToCartCallback(produto));

      categoryContainer.appendChild(card);
    });

    productList.appendChild(categoryContainer);
  }
}
