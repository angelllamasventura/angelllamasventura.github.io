// Typing Animation
const text = "Ángel Llamas Ventura";
const typingElement = document.getElementById('typing-text');
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeText, 120);
    } else {
        typingElement.classList.remove('typing-cursor');
    }
}

// Intersection Observer for Animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars with improved logic
                const skillBars = entry.target.querySelectorAll('.skill-bar[data-width]');
                if (skillBars.length > 0) {
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            const width = bar.getAttribute('data-width');
                            bar.style.width = width;
                            bar.style.opacity = '1';
                        }, index * 200 + 500);
                    });
                }
            }
        });
    }, { threshold: 0.2 });

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .elegant-card, .elegant-card-dark').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Contact Form Demo
function showContactDemo() {
    const demoMessage = document.getElementById('demo-message');
    demoMessage.classList.remove('hidden');
    setTimeout(() => {
        demoMessage.classList.add('hidden');
    }, 6000);
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeText, 1500);
    observeElements();
    
    // Initialize skill bars properly
    document.querySelectorAll('.skill-bar[data-width]').forEach(bar => {
        bar.style.width = '0%';
        bar.style.opacity = '0.3';
        bar.style.transition = 'width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease';
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Magnetic Effect for Cards
function initMagneticEffect() {
    const cards = document.querySelectorAll('.elegant-card, .elegant-card-dark');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Parallax Scrolling Effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Staggered Animation for Grid Items
function initStaggeredAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const gridItems = entry.target.querySelectorAll('.stagger-animation');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.grid').forEach(grid => {
        observer.observe(grid);
    });
}

// Enhanced Scroll Animations
function initEnhancedScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal-animation').forEach(el => {
        observer.observe(el);
    });
}

// Initialize all advanced animations
document.addEventListener('DOMContentLoaded', function() {
    initMagneticEffect();
    initParallaxEffect();
    initStaggeredAnimations();
    initEnhancedScrollAnimations();
});
