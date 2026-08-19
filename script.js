/* ==========================================================================
   Kristyn Rostan Portfolio - Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Check saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    body.className = savedTheme;

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    // 3. Experience Timeline Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            timelineItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // 4. Copy Email to Clipboard
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'krostan68@yahoo.com';
            navigator.clipboard.writeText(email).then(() => {
                const icon = copyEmailBtn.querySelector('i');
                icon.className = 'fa-solid fa-check';
                copyEmailBtn.style.color = '#10B981';
                setTimeout(() => {
                    icon.className = 'fa-regular fa-copy';
                    copyEmailBtn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    // 5. Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Show success message
            formSuccess.classList.remove('hidden');
            contactForm.reset();

            // Open mailto pre-filled
            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:krostan68@yahoo.com?subject=${subject}&body=${bodyText}`;

            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 6000);
        });
    }
});
