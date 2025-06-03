// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.project-card');
const totalSlides = slides.length;

function moveCarousel(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    const track = document.querySelector('.carousel-track');
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Auto-play carousel
setInterval(() => {
    moveCarousel(1);
}, 5000);

// Project details modal
const projectDetails = {
    1: {
        title: "Autoput E-75",
        content: `
            <h3>Autoput E-75 - Deonice Beograd-Niš</h3>
            <p>Jedan od naših najvećih projekata uključuje isporuku visokokvalitetnog sljunka za izgradnju autoputa E-75. 
            Ovaj projekat je zahtevao:</p>
            <ul>
                <li>Preko 50.000 tona različitih frakcija sljunka</li>
                <li>Striktno poštovanje rokova isporuke</li>
                <li>Kontinuiranu kontrolu kvaliteta materijala</li>
                <li>Koordinaciju sa više izvođača radova</li>
            </ul>
            <p>Projekat je uspešno završen u roku, doprinoseći poboljšanju saobraćajne infrastrukture Srbije.</p>
        `
    },
    2: {
        title: "Most na Zapadnoj Moravi",
        content: `
            <h3>Most na Zapadnoj Moravi</h3>
            <p>Kompletan projekat izgradnje novog mosta uključio je:</p>
            <ul>
                <li>Specijalizovane materijale za fundamente</li>
                <li>Sljunak za pristupne saobraćajnice</li>
                <li>Drenažni materijali</li>
                <li>Tehničku podršku tokom celokupne izgradnje</li>
            </ul>
            <p>Most je otvoren 2023. godine i značajno je poboljšao saobraćajnu povezanost regiona.</p>
        `
    },
    3: {
        title: "Stambeni kompleks 'Novi Trstenik'",
        content: `
            <h3>Stambeni kompleks "Novi Trstenik"</h3>
            <p>Najveći stambeni projekat u regionu za koji smo obezbedili:</p>
            <ul>
                <li>Građevinski pesak različitih granulacija</li>
                <li>Sljunak za fundamente i betonske konstrukcije</li>
                <li>Drenažni materijali za infrastrukturu</li>
                <li>Kontinuiranu logističku podršku</li>
            </ul>
            <p>Kompleks će pružiti dom za preko 500 porodica i predstavlja značajan doprinos razvoju lokalне zajednice.</p>
        `
    }
};

function openProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = projectDetails[projectId].content;
    modal.style.display = 'block';
}

function closeProjectDetails() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.usp-item, .project-card, .partner-logo').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});