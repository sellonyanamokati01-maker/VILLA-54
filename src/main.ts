import './styles/global.css';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupNsfasBadge();
  setupScrollReveal();
  setupRoomCards();
  setupContactForm();
});

function setupNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function setupNsfasBadge() {
  const textPath = document.querySelector('.nsf-text textPath') as SVGTextPathElement | null;
  if (!textPath) return;

  let offset = 0;
  const rotate = () => {
    offset += 0.15;
    if (offset > 100) offset = 0;
    textPath.setAttribute('startOffset', `${offset}%`);
    requestAnimationFrame(rotate);
  };
  requestAnimationFrame(rotate);
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function setupRoomCards() {
  const roomCards = document.querySelectorAll('.room-card');
  roomCards.forEach((card) => {
    const flip = () => card.classList.toggle('active');
    
    card.addEventListener('click', flip);
    card.addEventListener('keydown', (e: any) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flip();
      }
    });
  });
}

function setupContactForm() {
  const form = document.querySelector('.contact-form-section form') as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    const text = [
      'Hello Villa54!',
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Message: ${data.message}`,
    ]
      .map(encodeURIComponent)
      .join('%0A');

    const whatsappNumber = '27623926399';
    const waLink = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(waLink, '_blank');
  });
}
