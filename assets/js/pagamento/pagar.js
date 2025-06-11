const produtosContainer = document.getElementById('resumoProdutos');
const totalEl = document.getElementById('resumoTotal');
const botaoConfirmar = document.getElementById('confirmarPagamento');

const carrinho = JSON.parse(localStorage.getItem('cart')) || [];

let total = 0;

carrinho.forEach(produto => {
    const item = document.createElement('div');
    item.className = "d-flex justify-content-between border rounded p-2 bg-white shadow-sm";
    item.innerHTML = `
        <div>${produto.name}</div>
        <div>R$ ${produto.price}</div>
      `;
    produtosContainer.appendChild(item);
    total += produto.price;
});

totalEl.textContent = `Total: R$ ${total}`;

botaoConfirmar.addEventListener('click', () => {
    alert('Pagamento confirmado com sucesso!');
    localStorage.removeItem('cart');
    window.location.href = 'carrinho.html';
});