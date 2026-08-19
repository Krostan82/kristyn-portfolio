/**
 * Kristyn Rostan - Executive Portfolio Interactive Logic
 * With Lucide Icons Integration
 */

document.addEventListener('DOMContentLoaded', () => {
    // 0. Initialize Lucide Icons
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            mobileMenuBtn.innerHTML = isOpen 
                ? '<i data-lucide="x" style="width: 20px; height: 20px;"></i>' 
                : '<i data-lucide="menu" style="width: 20px; height: 20px;"></i>';
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" style="width: 20px; height: 20px;"></i>';
                if (typeof lucide !== 'undefined' && lucide.createIcons) {
                    lucide.createIcons();
                }
            });
        });
    }

    // 2. Active Navigation Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu .nav-link');

    function highlightActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNav, { passive: true });

    // 3. Experience Filtering
    const filterButtons = document.querySelectorAll('.experience-filter .filter-btn');
    const experienceCards = document.querySelectorAll('.experience-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            experienceCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. One-Click Copy Email with Lucide Check Icon
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'krostan68@yahoo.com';
            navigator.clipboard.writeText(email).then(() => {
                const originalHtml = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = '<i data-lucide="check" style="width: 14px; height: 14px; color: #168C8C;"></i>';
                copyEmailBtn.title = 'Email copied!';
                if (typeof lucide !== 'undefined' && lucide.createIcons) {
                    lucide.createIcons();
                }
                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalHtml;
                    copyEmailBtn.title = 'Copy Email';
                    if (typeof lucide !== 'undefined' && lucide.createIcons) {
                        lucide.createIcons();
                    }
                }, 2500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    // 5. Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (formSuccess) {
                formSuccess.classList.remove('hidden');
                if (typeof lucide !== 'undefined' && lucide.createIcons) {
                    lucide.createIcons();
                }
            }

            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            setTimeout(() => {
                window.location.href = `mailto:krostan68@yahoo.com?subject=${subject}&body=${body}`;
            }, 600);
        });
    }
});
