document.addEventListener('DOMContentLoaded', () => {

    const joinButton = document.getElementById('join-btn');
    const joinMessage = document.getElementById('join-message');

    if (joinButton && joinMessage) {
        
        joinButton.addEventListener('click', () => {
            
            joinButton.style.display = 'none';
            
            joinMessage.classList.remove('hidden');
        });
    }

});
