export const Alerts = (variant, message) => {
    const alertContainer = document.getElementById('alertContainer');
  
    // Verifica se já existe um alerta na tela
    if (alertContainer.querySelector('sl-alert')) {
        return;
    }
  
    const alert = document.createElement('sl-alert');
    alert.setAttribute('variant', variant);
    alert.setAttribute('open', '');
    alert.setAttribute('duration', '3000');
  
    // Ícones específicos para cada tipo
    const icons = {
      success: 'check2-circle',
      warning: 'exclamation-triangle',
      danger: 'exclamation-octagon',
      primary: 'info-circle',
      neutral: 'gear'
    };
  
    const iconName = icons[variant] || 'info-circle';
  
    alert.innerHTML = ` 
      <sl-icon slot="icon" name="${iconName}"></sl-icon>
      <strong>${message}</strong>
    `;
  
    alertContainer.appendChild(alert);
  
    setTimeout(() => {
      alert.remove();
    }, 3000);
};
  
// Listener genérico para todos os botões
document.querySelectorAll('.alert-button').forEach(button => {
    button.addEventListener('click', () => {
      const variant = button.getAttribute('data-variant');
      const message = button.getAttribute('data-message');
      Alerts(variant, message);
    });
});
