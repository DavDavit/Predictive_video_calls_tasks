document.addEventListener('DOMContentLoaded', function() {
    var clickButton = document.getElementById('clickButton');
    var displayArea = document.getElementById('displayArea');
    var clickCount = 0;

    clickButton.addEventListener('click', function() {
        clickCount++;
        displayArea.textContent = clickCount;
    });
});
