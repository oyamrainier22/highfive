// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
}

// Add click event listeners to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});

// Add click event listeners to mobile navigation links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission (in real app, this would send to server)
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    successMessage.classList.add('show');
    
    // Reset form
    contactForm.reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
});

// Add to Order button functionality
document.querySelectorAll('.menu-item-btn').forEach(button => {
    button.addEventListener('click', () => {
        // In a real app, this would add to cart
        console.log('Item added to order');
        
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = 'Added! 🎉';
        button.style.background = 'var(--gradient-secondary)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'var(--gradient-primary)';
        }, 1500);
    });
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.menu-item, .feature-card, .contact-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
window.addEventListener('scroll', animateOnScroll);

// Set initial state for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.menu-item, .feature-card, .contact-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial check
    animateOnScroll();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Add click handlers for social media links
document.querySelectorAll('.social-btn, .social-link').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Social media link clicked');
        // In a real app, this would open the social media page
    });
});

// Add click handlers for contact actions
document.querySelectorAll('.contact-action').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.textContent;
        console.log(`Contact action: ${action}`);
        // In a real app, this would open maps, phone dialer, etc.
    });
});

// Enhanced hover effects for menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02) translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) translateY(0)';
    });
});

// Enhanced hover effects for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02) translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
    });
});

// Navbar background opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(254, 251, 248, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(254, 251, 248, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Fade-in on scroll effect
const fadeEls = document.querySelectorAll('.fade-in-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeEls.forEach(el => observer.observe(el));

console.log('High Five website loaded! 🖐️');

document.addEventListener('DOMContentLoaded', function() {
            var viewBtn = document.getElementById('viewFullMenuBtn');
            var hideBtn = document.getElementById('hideMenuBtn');
            var hiddenItems = document.querySelectorAll('.menu-item-hidden');
            viewBtn.addEventListener('click', function() {
                hiddenItems.forEach(function(item) {
                    item.style.display = 'block';
                });
                viewBtn.style.display = 'none';
                hideBtn.style.display = 'inline-block';
            });
            hideBtn.addEventListener('click', function() {
                hiddenItems.forEach(function(item) {
                    item.style.display = 'none';
                });
                viewBtn.style.display = 'inline-block';
                hideBtn.style.display = 'none';
                // Optionally scroll to menu section
                document.getElementById('menu').scrollIntoView({behavior: 'smooth'});
            });
            // Hide hidden items by default
            hiddenItems.forEach(function(item) {
                item.style.display = 'none';
            });
        });


// Filter menu items by category    
         document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const menuItems = document.querySelectorAll(".menu-item");

        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const category = button.getAttribute("data-category").trim().toLowerCase();

                menuItems.forEach(item => {
                    const badge = item.querySelector(".badge-category");
                    const itemCategory = badge ? badge.textContent.trim().toLowerCase() : "";

                    if (category === "all" || itemCategory === category) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    });