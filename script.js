// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav ul');

mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
