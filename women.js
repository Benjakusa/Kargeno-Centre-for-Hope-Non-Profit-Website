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

    // Parallax Effect for Hero Banner
    const heroBanner = document.querySelector('.hero-banner');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroBanner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Lazy Loading Images
    const lazyElements = document.querySelectorAll('.media-img');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.src = element.getAttribute('src');
                    observer.unobserve(element);
                }
            });
        }, { rootMargin: '0px 0px 200px 0px' });

        lazyElements.forEach(element => observer.observe(element));
    }

    // Card Animations
    const cards = document.querySelectorAll('.feature-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('card-animate', 'visible');
                }, index * 150);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => {
        card.classList.add('card-animate');
        cardObserver.observe(card);
    });

    // Timeline Animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('timeline-animate', 'visible');
                }, index * 200);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        item.classList.add('timeline-animate');
        timelineObserver.observe(item);
    });

    // Section Animations
    const sections = document.querySelectorAll('.hero-section, .about-section, .features-section, .empower-section, .cooperation-section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-animate', 'visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('section-animate');
        sectionObserver.observe(section);
    });
});