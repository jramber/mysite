document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.header-wrapper .header');
    const options_menu_wrapper = document.querySelector('.options-menu-wrapper');
    // const options_menu = document.querySelector('.options-menu');
    const options_icon = document.querySelector('.options');

    options_menu_wrapper.style.top = header.offsetHeight + 'px';

    options_icon.addEventListener('click', function() {
        // options_menu.style.height = window.screen.height - document.querySelector('.header').offsetHeight + 'px';
        options_menu_wrapper.classList.toggle('visible');
        options_icon.classList.toggle('active');

        if (options_menu_wrapper.classList.contains('visible')) {
            document.body.style.overflow = 'hidden';
            return;
        } else {
            document.body.style.overflow = 'auto';
            return;
        }
    });

    document.querySelectorAll('.navigation-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // element = this;
            // setTimeout(function() {
                document.getElementById(this.getAttribute('href').substring(1)).scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, '', this.getAttribute('href'));
            // }, 0);

            document.body.style.overflow = 'auto';
            options_icon.classList.remove('active');
            options_menu_wrapper.classList.remove('visible');
        });
        return;
    });

    return;
});

