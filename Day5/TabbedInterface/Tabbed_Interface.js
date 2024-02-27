document.addEventListener('DOMContentLoaded', function() {
    var tabButtons = document.querySelectorAll('.tab-button');
    var tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');

            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            document.getElementById(tabId).classList.add('active');
        });
    });
});
