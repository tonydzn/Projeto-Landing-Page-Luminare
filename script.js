
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navUl = document.querySelector('nav ul');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // Hero Carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (carouselItems.length > 0) {
        let currentSlide = 0;
        const totalSlides = carouselItems.length;

        setInterval(() => {
            // Remove active class from current slide
            carouselItems[currentSlide].classList.remove('active');

            // Move to next slide
            currentSlide = (currentSlide + 1) % totalSlides;

            // Add active class to new current slide
            carouselItems[currentSlide].classList.add('active');
        }, 5000); // Change every 5 seconds
    }
});
