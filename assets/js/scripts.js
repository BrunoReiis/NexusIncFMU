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
