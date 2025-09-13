// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle (would need additional HTML/CSS)
    // const menuToggle = document.querySelector('.menu-toggle');
    // const nav = document.querySelector('nav ul');
    // menuToggle.addEventListener('click', () => {
    //     nav.classList.toggle('active');
    // });
});