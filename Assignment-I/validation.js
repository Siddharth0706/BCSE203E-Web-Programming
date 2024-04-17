window.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const eventRegistrationForm = document.getElementById('eventRegistrationForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateLoginForm();
    });
    eventRegistrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateEventRegistrationForm();
    });

    function validateLoginForm() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        if (username === '') {
            alert('Please enter a username');
            return;
        }
        if (password === '') {
            alert('Please enter a password');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        alert('Login successful!');
        loginForm.submit();
    }

    function validateEventRegistrationForm() {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const event = document.getElementById('event').value.trim();
        const comments = document.getElementById('comments').value.trim();
        if (fullName === '') {
            alert('Please enter your full name');
            return;
        }
        if (email === '') {
            alert('Please enter your email');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (phone === '') {
            alert('Please enter your phone number');
            return;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number');
            return;
        }
        if (event === '') {
            alert('Please select an event');
            return;
        }
        if (comments === '') {
            alert('Please enter your comments');
            return;
        }
        alert('Event registration successful!');
        eventRegistrationForm.submit();
    }
});
