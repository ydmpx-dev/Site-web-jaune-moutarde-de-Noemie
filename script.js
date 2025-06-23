document.addEventListener('DOMContentLoaded', () => {
    const choiceSection = document.querySelector('.choice-section');
    const femaleButton = document.querySelector('.choice-button.female');
    const maleButton = document.querySelector('.choice-button.male');
    const femaleSound = document.getElementById('female-sound');
    const maleSound = document.getElementById('male-sound');
    const imageContainer = document.querySelector('.centered-image');

    // Fonction pour gérer le scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            // Scrolling down
            choiceSection.classList.remove('hidden');
        }
        lastScroll = currentScroll;
    });

    // Gestion des clics sur les boutons
    femaleButton.addEventListener('click', () => {
        femaleSound.play();
    });

    maleButton.addEventListener('click', () => {
        maleSound.play();
    });

    // Gestion du zoom de l'image
    imageContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            imageContainer.classList.add('fullscreen');
            
            // Ajouter le bouton de fermeture
            const closeButton = document.createElement('button');
            closeButton.className = 'close-button';
            closeButton.textContent = '×';
            closeButton.addEventListener('click', () => {
                imageContainer.classList.remove('fullscreen');
                closeButton.remove();
            });
            imageContainer.appendChild(closeButton);
        }
    });

    // Fermer si on clique en dehors de l'image
    document.addEventListener('click', (e) => {
        if (imageContainer.classList.contains('fullscreen') && !imageContainer.contains(e.target)) {
            imageContainer.classList.remove('fullscreen');
            const closeButton = imageContainer.querySelector('.close-button');
            if (closeButton) closeButton.remove();
        }
    });
});
