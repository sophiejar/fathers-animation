document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let isMusicPlaying = true; // Start as true since we'll play automatically

    // Set initial volume and start playing
    backgroundMusic.volume = 0;
    backgroundMusic.play().then(() => {
        // Fade in the music
        let volume = 0;
        const fadeIn = setInterval(() => {
            if (volume < 0.3) {
                volume += 0.01;
                backgroundMusic.volume = volume;
            } else {
                clearInterval(fadeIn);
            }
        }, 50);
    }).catch(error => {
        console.log("Autoplay prevented:", error);
        isMusicPlaying = false;
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    });

    // Update music icon to show it's playing
    musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';

    // Ensure envelope starts closed
    envelope.classList.remove('open');
    letter.style.transform = 'translateY(200%)';
    letter.style.opacity = '0';

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
            
            // If we're closing the envelope, reset the letter position
            if (!envelope.classList.contains('open')) {
                letter.style.transform = 'translateY(200%)';
                letter.style.opacity = '0';
            }
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