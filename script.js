const starsContainer = document.querySelector('.stars');
for (let i = 0; i < 100; i++) {  // Adjust the number as needed
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = `${Math.random() * 3}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starsContainer.appendChild(star);
}

// Emoji bounce effect
document.querySelectorAll("section").forEach(section => {
    section.addEventListener("mouseenter", function() {
        const emoji = this.querySelector(".emoji");
        emoji.classList.add("show-emoji");
        setTimeout(() => emoji.classList.remove("show-emoji"), 1000);
    });
});

// Toggle heart letter visibility
function toggleHeart(element) {
    element.classList.toggle("active");
}

// Smooth scroll to section on navigation click
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
