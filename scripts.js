// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjusted for header
                behavior: 'smooth'
            });
        }
    });
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    });
};

// Run revealOnScroll when scrolling
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Hover Effect for Service List Items
document.querySelectorAll('.section ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = '0.3s';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Optional: Basic Contact Form Validation (If You Add a Contact Form)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        alert('Message sent successfully!');
        contactForm.reset();
    });
}
