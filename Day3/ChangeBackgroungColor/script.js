document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.color-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var color = this.getAttribute('data-color');
            document.body.style.backgroundColor = color;
        });
    });
});
