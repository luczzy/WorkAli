// Simula o tempo de carregamento
window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('wLogo').classList.add('show');
    }, 3000); // Mostra o "W" após 3s

    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
      document.getElementById('conteudo').classList.add('show');
    }, 5000); // Remove a tela de loading após 5s
  });

