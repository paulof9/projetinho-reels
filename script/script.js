document.addEventListener('DOMContentLoaded', function() {
    const buttonX = document.querySelector('.fechar');
    const popup = document.querySelector('.window');

    function hidePopup() {
        popup.classList.add('hidden');
        localStorage.setItem('popupClosed', 'true');

        // display: none após a transição
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000); // Tempo deve coincidir com a duração da transição
    }

    if (localStorage.getItem('popupClosed') === 'true') {
        popup.classList.add('hidden');
        popup.style.display = 'none'; // define
    } else {
        popup.classList.remove('hidden');
        popup.style.display = 'flex';
    }


    buttonX.addEventListener('click', hidePopup);
});