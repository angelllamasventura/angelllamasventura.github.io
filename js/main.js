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

        // Animate skill bars with improved logic (clamp 0..100)
        const skillBars = entry.target.querySelectorAll('.skill-bar[data-width]');
        if (skillBars.length > 0) {
          skillBars.forEach((bar, idx) => {
            setTimeout(() => {
              let raw = (bar.getAttribute('data-width') || '0').toString().replace('%','').trim();
              let n = parseFloat(raw);
              if (isNaN(n)) n = 0;
              n = Math.max(0, Math.min(100, n)); // clamp
              bar.style.width = n + '%';
              bar.style.opacity = '1';
            }, idx * 160 + 400);
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
});
    
// Initialize skill bars properly
document.querySelectorAll('.skill-bar[data-width]').forEach(bar => {
    bar.style.width = '0%';
    bar.style.opacity = '0.3';
    bar.style.transition = 'width 1.6s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease';
    bar.style.maxWidth = '100%';
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
// Fuerza descarga usando la URL ABSOLUTA del enlace
function downloadCV(url, filename = 'CV.pdf') {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('No se pudo descargar el CV');
      return res.blob();
    })
    .then(blob => {
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(objectUrl);
    })
    .catch(err => alert('Error al descargar el CV: ' + err.message));
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-cv');
  if (!btn) return;

  // Si estás en file://, avisa y deja el comportamiento por defecto
  if (location.protocol === 'file:') {
    btn.addEventListener('click', () => {
      alert('Para forzar la descarga usa Live Server o http://localhost; en file:// algunos navegadores bloquean la descarga.');
    }, { once: true });
    return;
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const absoluteUrl = btn.href;              
    const filename   = btn.getAttribute('download') || 'CV.pdf';
    downloadCV(absoluteUrl, filename);
  });
});


// Initialize all advanced animations
document.addEventListener('DOMContentLoaded', function() {
    initParallaxEffect();
    initStaggeredAnimations();
    initEnhancedScrollAnimations();
});
