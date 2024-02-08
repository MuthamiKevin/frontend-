// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Function to toggle the visibility of the contact form
function toggleContactForm() {
    var contactForm = document.getElementById('fcf-form');
    contactForm.style.display = (contactForm.style.display === 'none' || contactForm.style.display === '') ? 'block' : 'none';
}

// Function to handle form submission
function submitForm() {
    // You can add your form submission logic here
    // For example, you can send form data to a server using AJAX
    // Or you can perform form validation before submission
    // For demonstration purpose, let's just log a message
    console.log('Form submitted!');
}

// Add event listeners for toggling contact form and form submission
document.getElementById('contact-form-toggle').addEventListener('click', toggleContactForm);
document.getElementById('fcf-form-id').addEventListener('submit', submitForm);
