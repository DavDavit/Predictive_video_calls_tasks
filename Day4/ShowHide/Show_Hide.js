document.addEventListener('DOMContentLoaded', function() {
    var paragraph = document.getElementById('paragraph');
    var toggleButton = document.getElementById('toggleButton');
    var isHidden = false;

    toggleButton.addEventListener('click', function() {
        if (isHidden) {
            paragraph.style.display = 'block';
            toggleButton.textContent = 'Hide';
        } else {
            paragraph.style.display = 'none';
            toggleButton.textContent = 'Show';
        }
        isHidden = !isHidden;
    });
});
