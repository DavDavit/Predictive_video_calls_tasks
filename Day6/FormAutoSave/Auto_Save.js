document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    function loadFormData() {
        var formData = JSON.parse(localStorage.getItem('formData'));
        if (formData) {
            nameInput.value = formData.name || '';
            emailInput.value = formData.email || '';
        }
    }

    function saveFormData() {
        var formData = {
            name: nameInput.value,
            email: emailInput.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    function throttle(callback, delay) {
        var previousCall = new Date().getTime();
        return function() {
            var time = new Date().getTime();
            if ((time - previousCall) >= delay) {
                previousCall = time;
                callback.apply(null, arguments);
            }
        };
    }

    function autoSave() {
        saveFormData();
    }

    nameInput.addEventListener('input', throttle(autoSave, 1000));
    emailInput.addEventListener('input', throttle(autoSave, 1000));

    loadFormData();
});
