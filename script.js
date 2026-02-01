// Form validation and submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateForm = () => {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Name validation
    if (!name) {
        document.getElementById('nameError').classList.add('show');
        isValid = false;
    } else {
        document.getElementById('nameError').classList.remove('show');
    }

    // Email validation
    if (!email || !validateEmail(email)) {
        document.getElementById('emailError').classList.add('show');
        isValid = false;
    } else {
        document.getElementById('emailError').classList.remove('show');
    }

    // Subject validation
    if (!subject) {
        document.getElementById('subjectError').classList.add('show');
        isValid = false;
    } else {
        document.getElementById('subjectError').classList.remove('show');
    }

    // Message validation
    if (!message || message.length < 10) {
        document.getElementById('messageError').classList.add('show');
        isValid = false;
    } else {
        document.getElementById('messageError').classList.remove('show');
    }

    return isValid;
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Show success message
        successMessage.classList.add('show');
        
        // Log form data to console
        console.log('Form Data:', formData);
        
        // Alert the user
        alert('Message sent successfully!\n\nThank you for reaching out. I will get back to you soon.');
        
        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
