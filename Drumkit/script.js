
window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.setAttribute('id', 'playing');
    setTimeout(function() {
        key.removeAttribute('id', 'playing');
    }, 200);

}
