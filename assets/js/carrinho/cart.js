// Importa o objeto com produtos organizados por categoria e a função para renderizar agrupado
import { produtosPorCategoria, renderProductListGrouped } from './products.js';

const cartItemsContainer = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const goToPaymentBtn = document.getElementById('goToPaymentBtn');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Renderiza os produtos no carrinho
function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<sl-alert variant="warning" open>Seu carrinho está vazio.</sl-alert>`;
    cartTotalEl.textContent = '0.00';
    goToPaymentBtn.disabled = true;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'list-group-item d-flex justify-content-between align-items-center';

    itemEl.innerHTML = `
      <div>
        <strong>${item.name}</strong><br/>
        R$ ${item.price.toFixed(2)}
      </div>
      <sl-button size="small" variant="danger" title="Remover item" aria-label="Remover item">
        <sl-icon name="trash"></sl-icon>
      </sl-button>
    `;

    const btnRemove = itemEl.querySelector('sl-button');
    btnRemove.addEventListener('click', () => {
      removeItem(index);
    });

    cartItemsContainer.appendChild(itemEl);

    total += item.price;
  });

  cartTotalEl.textContent = total.toFixed(2);
  goToPaymentBtn.disabled = false;
}

// Adiciona produto ao carrinho e salva no localStorage
export function addToCart(produto) {
  cart.push(produto);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Remove produto do carrinho pelo índice
window.removeItem = function(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
};

// Evento para botão "Ir para pagamento"
goToPaymentBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }
  window.location.href = 'pagamento.html'; // Ajuste o caminho conforme necessário
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderProductListGrouped(addToCart);
  renderCart();
});
