document.addEventListener('DOMContentLoaded', function() {
    var myForm = document.getElementById('myForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');

    myForm.addEventListener('submit', function(event) {
        var isValid = true;
        
        nameError.textContent = '';
        emailError.textContent = '';

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
