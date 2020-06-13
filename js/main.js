document.querySelector('.navbar-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > (36.25 * parseFloat(getComputedStyle(document.documentElement).fontSize))) {
        document.querySelector('.menu').classList.remove('active');
    };
});  