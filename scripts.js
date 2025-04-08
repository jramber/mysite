function disableScroll () {
    document.body.style.overflow = 'hidden';
}

function enableScroll () {
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {

    const options_menu_wrapper = document.querySelector('.options-menu-wrapper');
    const options_menu = document.querySelector('.options-menu');
    const options_icon = document.querySelector('.options');

    options_menu.style.height = window.screen.height - document.querySelector('.header').offsetHeight + 'px';

    options_icon.addEventListener('click', function() {
        options_menu_wrapper.classList.toggle('visible');

        if (options_menu_wrapper.classList.contains('visible')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    /*
        const navbar = document.querySelector('.navbar');
        const offset = document.querySelector('.offset');

        navbar.addEventListener('click', function() {
            offset.classList.toggle('visible');

            if (offset.classList.contains('visible')) {
                disableScroll();
            } else {
                enableScroll();
            }
        });

        // do your setup here
        console.log('Initialized app');
        // Initialize the app
    */
});

