// Import de componentes
import './navbar.js';
import './footer.js'
import './alerts.js'

// Carregar os scritps externos
function loadScript(src, type = 'text/javascript', isModule = false) {
  const script = document.createElement('script');
  script.src = src;
  script.type = isModule ? 'module' : type;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

// Bootstrap
loadScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js');
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.min.js');

// Shoelace
loadScript('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/shoelace-autoloader.js', 'module', true);

// Firebase
loadScript('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js', () => {
  // 2. Quando firebase-app estiver pronto, carrega os outros
  loadScript('https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js', () => {
    loadScript('https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js', () => {
      // 3. Quando todos os scripts do Firebase estiverem prontos, carrega o config.js
      loadScript('../firebase/config.js');
    });
  });
});