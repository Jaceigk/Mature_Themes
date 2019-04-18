window.onload = init;

function init() {
    document.querySelector('.toggle-button')
        .addEventListener('click', toggleTheme);
}

function toggleTheme(event) {
    event.preventDefault();

    const app = document.querySelector('.app');
    const button = event.target;
    const header = document.querySelector('.header');

    app.classList.toggle('beaming-sun');
    button.classList.toggle('full-moon');

    button.innerText = button.innerText === 'Full Moon'
        ? `Beaming Sun` 
        : `Full Moon`;

    header.innerText = header.innerText === 'Beaming Sun'
        ? 'Full Moon'
        : 'Beaming Sun';

    header.classList.replace('Beaming Sun', 'Full Moon');
    
}