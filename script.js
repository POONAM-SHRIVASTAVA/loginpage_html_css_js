document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.querySelector('.signInBtn');
    const form = document.getElementById('loginForm');

    signInBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        clearErrors();

        // Retrieve input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;

        // Validate username
        if (username === '') {
            showError('username', 'Username cannot be empty.');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showError('email', 'Email cannot be empty.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate password
        if (password === '') {
            showError('password', 'Password cannot be empty.');
            isValid = false;
        } else if (password.length < 6) {
            showError('password', 'Password must be at least 6 characters long.');
            isValid = false;
        }

        if (isValid) {
            alert('Login successful!');
            // Handle form submission here
            // For example: form.submit();
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(inputId, message) {
        const inputField = document.getElementById(inputId);
        const errorSpan = inputField.nextElementSibling;
        errorSpan.textContent = message;
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.textContent = '');
    }
});
