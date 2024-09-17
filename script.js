// Toggle navigation menu on mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});


// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Update active class on navigation links
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});
