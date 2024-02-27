document.addEventListener('DOMContentLoaded', function() {
    var emailForm = document.getElementById('emailForm');

    emailForm.addEventListener('submit', function(event) {
        var emailInput = document.getElementById('emailInput').value.trim();

        if (emailInput === '') {
            alert('Please enter an email address');
            event.preventDefault(); // Prevent form submission
        }
    });
});
