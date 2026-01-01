const nav = document.querySelector('.top-nav nav');
const toggle = document.querySelector('.menu-toggle');
const floatingCTA = document.querySelector('.floating-cta');

// Mobile nav toggle
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Smooth scroll for in-page links
nav?.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof HTMLAnchorElement && target.getAttribute('href')?.startsWith('#')) {
    event.preventDefault();
    const section = document.querySelector(target.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('open');
    }
  }
});

// Floating CTA action
floatingCTA?.addEventListener('click', () => {
  window.open('mailto:nihaljani@njlearninghub.com?subject=Book%20a%20call', '_blank');
});

// Intersection highlight for subtle dynamic glow
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section, .card').forEach((element) => observer.observe(element));
