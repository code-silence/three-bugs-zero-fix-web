const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    menuBtn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            navLinks.classList.toggle('active');
        }
    });
}



// Typing Effect

const texts = [
    "Frontend And Backend Developers",
    "Creative Designers",
    "Future Software Engineers",
    "Team Collaboration Experts"
];

let textIndex = 0;
let charIndex = 0;

const typingText = document.querySelector(".typing-text");

function typeEffect() {

    if (charIndex < texts[textIndex].length) {

        typingText.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingText.innerHTML =
            texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

typeEffect();