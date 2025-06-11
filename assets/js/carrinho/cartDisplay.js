import { getCart, removeFromCart } from './cart.js';

export function updateCartDisplay() {
  const cart = getCart();
  const cartList = document.getElementById('cart-list');
  const total = document.getElementById('total');

  cartList.innerHTML = '';
  let sum = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="d-flex justify-content-between align-items-center border rounded p-2 bg-white shadow-sm">
        <div>
          <strong>${item.name}</strong><br>
          <span>R$ ${item.price}</span>
        </div>
        <sl-button variant="danger" size="small" circle>
          <sl-icon name="trash"></sl-icon>
        </sl-button>
      </div>
    `;
    div.querySelector('sl-button').addEventListener('click', () => {
      removeFromCart(index);
      updateCartDisplay();
    });
    cartList.appendChild(div);
    sum += item.price;
  });

  total.textContent = `Total: R$ ${sum}`;

  // Adiciona o botão de pagamento se o carrinho não estiver vazio
  const pagarBtn = document.createElement('sl-button');
  pagarBtn.innerHTML = `<sl-icon name="credit-card" slot="prefix"></sl-icon> Finalizar Compra`;
  pagarBtn.setAttribute('variant', 'success');
  pagarBtn.classList.add('w-100', 'mt-3');
  pagarBtn.addEventListener('click', () => {
    window.location.href = 'pagamento.html';
  });

  if (cart.length > 0) {
    cartList.appendChild(pagarBtn);
  }
}


document.addEventListener('DOMContentLoaded', updateCartDisplay);
