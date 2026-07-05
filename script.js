const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

//toggle mobile menu visibility

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu")
})

//close menu when close button is clicked
menuCloseButton.addEventListener('click', () =>menuOpenButton.click());
