// ===== ACTIVE NAVBAR LINK =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});


// ===== SMOOTH SCROLL =====

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===== SCROLL REVEAL ANIMATION =====

const revealElements = document.querySelectorAll(
    ".section-card, .project-card, .service-card, .skill-card, .timeline-item"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===== PROJECT CARD HOVER EFFECT =====

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });

});


// ===== TYPING EFFECT =====

const roles = [
    "AI Developer",
    "Full Stack Developer",
    "Tech Enthusiast",
    "Open Source Contributor"
];

const typingElement = document.querySelector(".role");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// ===== PROJECT IMAGE CLICK =====

const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach(image => {

    image.addEventListener("click", () => {

        image.classList.add("clicked");

        setTimeout(() => {
            image.classList.remove("clicked");
        }, 300);

    });

});


// ===== CONTACT FORM =====

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    contactForm.reset();

});


// ===== SCROLL TO TOP BUTTON =====

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top-btn");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.classList.add("show-scroll");
    } else {
        scrollBtn.classList.remove("show-scroll");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===== MOBILE MENU TOGGLE =====

const navbar = document.querySelector(".navbar");

const menuBtn = document.createElement("div");

menuBtn.innerHTML = `<i class='bx bx-menu'></i>`;

menuBtn.classList.add("menu-btn");

document.body.appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show-navbar");
});


// ===== PRELOADER =====

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("loader-hidden");
    }

});


// ===== DYNAMIC YEAR =====

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}