import { useEffect } from 'react';

export function useNavigation(navId: string, hamburgerClass: string) {
  useEffect(() => {
    const hamburger = document.querySelector(`.${hamburgerClass}`);
    const nav = document.getElementById(navId);

    if (hamburger && nav) {
      const handleClick = () => {
        const isOpen = nav.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(isOpen));
      };

      hamburger.addEventListener('click', handleClick);

      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });

      return () => {
        hamburger.removeEventListener('click', handleClick);
      };
    }
  }, [navId, hamburgerClass]);
}

export function useNsfasBadge() {
  useEffect(() => {
    const textPath = document.querySelector('.nsf-text textPath') as SVGTextPathElement | null;
    if (!textPath) return;

    let offset = 0;
    let animationId: number;

    const rotate = () => {
      offset += 0.15;
      if (offset > 100) offset = 0;
      textPath.setAttribute('startOffset', `${offset}%`);
      animationId = requestAnimationFrame(rotate);
    };

    animationId = requestAnimationFrame(rotate);

    return () => cancelAnimationFrame(animationId);
  }, []);
}

export function useScrollReveal(className: string = 'reveal') {
  useEffect(() => {
    const revealElements = document.querySelectorAll(`.${className}`);
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

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [className]);
}

export function useRoomCards(cardSelector: string = '.room-card') {
  useEffect(() => {
    const roomCards = document.querySelectorAll(cardSelector);
    
    roomCards.forEach((card) => {
      const flip = () => card.classList.toggle('active');

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flip();
        }
      };

      card.addEventListener('click', flip);
      card.addEventListener('keydown', handleKeyDown as EventListener);
    });
  }, [cardSelector]);
}

export function useContactForm(formSelector: string = '.contact-form-section form') {
  useEffect(() => {
    const form = document.querySelector(formSelector) as HTMLFormElement | null;
    if (!form) return;

    const handleSubmit = (e: Event) => {
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
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [formSelector]);
}
