// Create stars in the background
for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.className = "star";
    let size = Math.random() * 3;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    document.querySelector(".stars").appendChild(star);
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
