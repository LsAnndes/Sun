document.addEventListener('DOMContentLoaded', function() {
    var staticImage = document.getElementById('staticImage');
    var gif = document.getElementById('gif');
    gif.style.display = 'none';

    const buttons = document.querySelectorAll('.button');

    function handleButtonClick(event) {
        buttons.forEach(button => button.classList.remove('clicked'));
        event.target.classList.add('clicked');
    }

    function preloadImages() {
        const images = [
            'sun.gif',
            'sun2.gif',
            'sun3.gif',
            'sun4.gif',
            'sun5.gif',
            'sun6.gif'
        ];

        images.forEach(image => {
            const img = new Image();
            img.src = image;
        });
    }

    preloadImages();

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            handleButtonClick(event);
            changeGif(event.target.getAttribute('data-current-src'));
        });
    });
});

function changeGif(src) {
    var staticImage = document.getElementById('staticImage');
    var gif = document.getElementById('gif');
    staticImage.style.display = 'none';
    gif.src = src;
    gif.style.display = 'block';
}
