document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Form Validation
    const form = document.getElementById('contactForm');
    if (form) { // Check if form exists
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Invalid email format.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            if (!messageInput.value.trim()) {
                messageError.textContent = 'Message is required.';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});