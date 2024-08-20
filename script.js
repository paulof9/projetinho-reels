// popup
const buttonX = document.querySelector('.fechar')
const popup = document.querySelector('.window')

buttonX.addEventListener('click', function() {
    popup.style = `
        opacity: 0;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        transition: all 2s;`;
})