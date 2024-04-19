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

function submitForm() {
    
    console.log('Form submitted!');
}
document.getElementById('contact-form-toggle').addEventListener('click', toggleContactForm);
document.getElementById('fcf-form-id').addEventListener('submit', submitForm);

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
    })
    srLeft.reveal('.about-info',{delay: 100})
    srLeft.reveal('.contact-info',{delay: 100})
    const editor = grapesjs.init({
        // Indicate where to init the editor. You can also pass an HTMLElement
        container: '#gjs',
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        fromElement: true,
        // Size of the editor
        height: '300px',
        width: 'auto',
        // Disable the storage manager for the moment
        storageManager: false,
        // Avoid any default panel
        panels: { defaults: [] },
      });