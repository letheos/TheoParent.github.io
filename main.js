import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.mount('#app');

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    boxes.forEach(box => {
        observer.observe(box);
    });
});
