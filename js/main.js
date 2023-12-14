document.addEventListener('DOMContentLoaded', function () {
    let drinkHeader = document.getElementById('drinkHeader');
    let lastScrollTop = 0;

    document.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;

        if (scrollPosition > lastScrollTop) {
            // Scrolling down
            drinkHeader.classList.add('visible');
            drinkHeader.classList.remove('invisible');
        } else {
            // Scrolling up
            drinkHeader.classList.remove('visible');
            drinkHeader.classList.add('invisible');
        }

        lastScrollTop = scrollPosition;
    });
});
