function disableScroll () {
    document.body.style.overflow = 'hidden';
}

function enableScroll () {
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header-wrapper .header');
    const options_menu_wrapper = document.querySelector('.options-menu-wrapper');
    const options_menu = document.querySelector('.options-menu');
    const options_icon = document.querySelector('.options');

    options_menu_wrapper.style.top = header.offsetHeight + 'px';

    options_icon.addEventListener('click', function() {
        options_menu.style.height = window.screen.height - document.querySelector('.header').offsetHeight + 'px';
        options_menu_wrapper.classList.toggle('visible');
        options_icon.classList.toggle('active');

        if (options_menu_wrapper.classList.contains('visible')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    const navigation_links = document.querySelectorAll('.navigation-link');
    navigation_links.forEach(function(link) {
        link.addEventListener('click', function() {
            enableScroll();
            options_menu_wrapper.classList.remove('visible');
            options_icon.classList.toggle('active');
        });
    })

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

