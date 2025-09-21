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

    // Card Animations
    const cards = document.querySelectorAll('.focus-card');
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

    // Table Row Animations
    const tableRows = document.querySelectorAll('.donation-table tr');
    const tableObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('table-row-animate', 'visible');
                }, index * 100);
                tableObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    tableRows.forEach(row => {
        row.classList.add('table-row-animate');
        tableObserver.observe(row);
    });

    // Section Animations
    const sections = document.querySelectorAll('.hero-section, .volunteer-section, .visit-section, .internship-section, .join-section, .focus-section, .donation-section, .donation-form-section, .contact-section');
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

    // Donation Form Animation
    const donationForm = document.querySelector('.donation-form');
    const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('form-animate', 'visible');
                formObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    donationForm.classList.add('form-animate');
    formObserver.observe(donationForm);

    // Donation Form Logic
    const donationForm = document.getElementById('donation-form');
    const amountRadios = document.querySelectorAll('.amount-radio');
    const customAmount = document.getElementById('custom-amount');
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const donateNowBtn = document.getElementById('donate-now-btn');

    // Payment method URLs (replace with actual links)
    const paymentUrls = {
        paypal: '#paypal', // Replace with PayPal Donate Button URL from paypal.com/donate/buttons
        mpesa: '#mpesa',  // Replace with M-Pesa PayBill or app link
        bank: '#bank'     // Replace with bank transfer details page
    };

    // Sync preset amounts with custom input
    amountRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            customAmount.value = radio.value;
            customAmount.disabled = true;
        });
    });

    // Enable custom amount input
    customAmount.addEventListener('input', () => {
        if (customAmount.value) {
            amountRadios.forEach(radio => radio.checked = false);
            customAmount.disabled = false;
        }
    });

    // Update Donate Now button URL based on payment method
    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            donateNowBtn.href = paymentUrls[method.value];
        });
    });

    // Form validation
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = customAmount.value || document.querySelector('input[name="amount"]:checked')?.value;
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value;

        if (!amount) {
            alert('Please select or enter a donation amount.');
            return;
        }

        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        if (parseFloat(amount) < 1) {
            alert('Donation amount must be at least $1.');
            return;
        }

        alert('Thank you for your donation! You will be redirected to the selected payment method.');
        window.location.href = donateNowBtn.href;
        donationForm.reset();
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields (Name, Email, Message).');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
        // Add actual form submission logic here (e.g., API call to backend)
    });
});