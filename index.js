document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const textoNatal = document.querySelector('.texto-natal');
  const snowfall = document.querySelector('.snowfall');

  // 1. Efeito ao clicar no Globo
  if (container) {
    container.addEventListener('click', function() {
      // Aplica o shake
      this.style.animation = 'shake 0.5s ease';
      
      // Aumenta a velocidade da neve
      if (snowfall) {
        snowfall.style.animationDuration = '2s';
      }
      
      // Reseta as animações após o tempo determinado
      setTimeout(() => {
        // Volta a neve ao normal
        if (snowfall) snowfall.style.animationDuration = '10s';
        
        // Remove o shake e volta a flutuar suavemente
        this.style.animation = 'flutuar 6s ease-in-out infinite';
      }, 500);
    });
  }

  // 2. Easter Egg ao clicar no nome
  if (textoNatal) {
    textoNatal.addEventListener('click', function(e) {
      e.stopPropagation(); // Impede que o clique ative o container também
      
      const segredo = document.createElement('div');
      segredo.innerHTML = '🎻 Para a melhor violinista que conheço 🎻';
      
      segredo.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.95);
        color: white;
        padding: 25px;
        border-radius: 15px;
        font-family: 'Dancing Script', cursive;
        font-size: 22px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 0 30px rgba(0,0,0,0.5);
        border: 2px solid #fff;
        transition: opacity 0.5s ease;
      `;
      
      document.body.appendChild(segredo);
      
      // Remove o easter egg após 3.5 segundos
      setTimeout(() => {
        segredo.style.opacity = '0';
        setTimeout(() => segredo.remove(), 500);
      }, 3500);
    });
  }
});

