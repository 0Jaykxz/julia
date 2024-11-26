document.getElementById('revealButton').addEventListener('click', function () {
    const message = document.getElementById('message');
    const heartContainer = document.getElementById('heartContainer');
    message.classList.remove('hidden');
    this.style.display = 'none'; // Oculta o botão após o clique

    // Toca a música
    const music = document.getElementById('backgroundMusic');
    music.play();

    // Inicia a animação de corações
    setInterval(() => createHeart(heartContainer), 300); // Cria um coração a cada 300ms
});

function createHeart(container) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duração aleatória
    container.appendChild(heart);

    // Remove o coração após a animação para evitar sobrecarga
    setTimeout(() => {
        container.removeChild(heart);
    }, 5000);
}
