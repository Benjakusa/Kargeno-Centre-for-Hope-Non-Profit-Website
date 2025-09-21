document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close Menu on Link Click
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    const slideInterval = 6000;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });

    let slideTimer = setInterval(nextSlide, slideInterval);

    // Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Lazy Loading Images
    const lazyElements = document.querySelectorAll('.activity-img, .gallery-item');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const bg = element.getAttribute('data-bg');
                    if (bg) {
                        element.style.backgroundImage = `url('${bg}')`;
                    }
                    observer.unobserve(element);
                }
            });
        }, { rootMargin: '0px 0px 200px 0px' });

        lazyElements.forEach(element => observer.observe(element));
    }

    // Card Animations
    const cards = document.querySelectorAll('.goal-card, .activity-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('card-animate', 'visible');
                }, index * 100); // Staggered animation
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.classList.add('card-animate');
        cardObserver.observe(card);
    });

    // Section Animations
    const sections = document.querySelectorAll('.goals-section, .activities-section, .gallery-section, .partners-section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('animate-out');
        sectionObserver.observe(section);
    });
});