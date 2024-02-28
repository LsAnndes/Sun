document.addEventListener('DOMContentLoaded', function() {
    var staticImage = document.getElementById('staticImage');
    var gif = document.getElementById('gif');
    gif.style.display = 'none';
});

function changeGif(src) {
    var staticImage = document.getElementById('staticImage');
    var gif = document.getElementById('gif');
    staticImage.style.display = 'none';
    gif.src = src;
    gif.style.display = 'block';
}

const buttons = document.querySelectorAll('.button');

function handleButtonClick(event) {
    buttons.forEach(button => button.classList.remove('clicked'));
    event.target.classList.add('clicked');
}
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
