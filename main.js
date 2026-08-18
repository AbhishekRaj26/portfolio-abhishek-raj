// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Dark/Light Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Initialize Theme
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
}
