document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Optional: Animate hamburger lines into an 'X'
            hamburger.classList.toggle('toggle');
        });
    }

    // --- Scroll Animations (Intersection Observer) ---
    // Select all elements with the 'fade-in-up' class
    const animatedElements = document.querySelectorAll('.fade-in-up');

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once the animation has triggered once
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px"
    });

    // Attach observer to each element
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });

});