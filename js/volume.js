document.addEventListener('DOMContentLoaded', function() {
    const muteButton = document.getElementById('muteButton');
    const audio = document.querySelector('.campfireAudio');
    let isMuted = true;

    muteButton.textContent = '🔇';
    muteButton.classList.add('muted');
    
    muteButton.addEventListener('click', function() {
        isMuted = !isMuted;
        audio.muted = isMuted;
        
        if (isMuted) {
            muteButton.textContent = '🔇';
            muteButton.classList.remove('unmuted');
            muteButton.classList.add('muted');
        } else {
            muteButton.textContent = '🔊';
            muteButton.classList.remove('muted');
            muteButton.classList.add('unmuted');
            audio.play();
        }
    });
});