document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.presentationtext, .laphoto, .map-frame');

    elements.forEach(element => {
        element.classList.add('hidden');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });

    // Event listeners for buttons
    const instabutton = document.getElementById("insta");
    const linkedinbutton = document.getElementById("linkedin");
    const githubbutton = document.getElementById("github");

    if (instabutton) {
        instabutton.addEventListener('click', redirectinsta);
    } else {
        console.error("Element with id 'insta' not found.");
    }

    if (linkedinbutton) {
        linkedinbutton.addEventListener('click', redirectlinkedin);
    } else {
        console.error("Element with id 'linkedin' not found.");
    }

    if (githubbutton) {
        githubbutton.addEventListener('click', redirectgithub);
    } else {
        console.error("Element with id 'github' not found.");
    }
});

function redirectinsta() {
    window.open("https://www.instagram.com/le_grand_theos/");
}

function redirectlinkedin() {
    window.open("https://www.linkedin.com/in/theo-parent-690842237/");
}

function redirectgithub() {
    window.open("https://github.com/letheos");
}
