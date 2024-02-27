document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var mainMenu = document.getElementById('mainMenu');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('open');
        mainMenu.classList.toggle('open');
    });
});
