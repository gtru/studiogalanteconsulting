const hamburgerMenu = document.querySelector('#menu-hamburger');
const menu = document.querySelector('#menu');

hamburgerMenu.addEventListener("click", event => {
    event.preventDefault();

    // https://stackoverflow.com/questions/18880890/how-do-i-toggle-an-elements-class-in-pure-javascript
    menu.classList.toggle('hide');
}, false);