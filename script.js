document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let isMusicPlaying = false;

    // Handle envelope click
    envelope.addEventListener('click', () => {
        // Add a class to trigger the animation
        envelope.classList.add('opening');
        
        // Play a subtle sound when opening/closing the envelope
        const envelopeSound = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
        envelopeSound.volume = 0.3;
        envelopeSound.play();

        // Toggle the open state after a small delay
        setTimeout(() => {
            envelope.classList.toggle('open');
            envelope.classList.remove('opening');
        }, 300);
    });

    // Handle music toggle
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            backgroundMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Add hover effect
    envelope.addEventListener('mouseenter', () => {
        if (!envelope.classList.contains('open')) {
            envelope.style.transform = 'translateY(-5px)';
        }
    });

    envelope.addEventListener('mouseleave', () => {
        if (!envelope.classList.contains('open')) {
            envelope.style.transform = 'translateY(0)';
        }
    });
}); 