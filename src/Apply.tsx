import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useScrollReveal } from './hooks';
import './styles/apply.css';

const ACCREDITATION_IMAGES = [
  '/images/accreditation1.jpg',
  '/images/accreditation2.jpg',
  '/images/accreditation6.jpg',
  '/images/accreditation5.jpg',
  '/images/accreditation4.jpg',
  '/images/accreditation3.jpg'
];

export default function Apply() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <section className="page-content reveal">
          <h1>Apply / NSFAS Accommodation</h1>
          <a href="https://www.nsfas.org.za" className="btn-nsfas" target="_blank" rel="noopener noreferrer">Apply via NSFAS</a>
        </section>

        <section className="accredited reveal">
          <h2>Accredited</h2>
          <div className="accredited-grid">
            {ACCREDITATION_IMAGES.map((img, idx) => (
              <img key={idx} src={img} alt={`Accreditation ${idx + 1}`} />
            ))}
          </div>
          <a href="https://www.nsfas.org.za" className="btn-nsfas" target="_blank" rel="noopener noreferrer">Apply via NSFAS</a>
        </section>

        <div className="download-section">
          <a href="/pdfs/villa54-accreditations.pdf" download className="btn-nsfas">Download Check-in form PDF</a>
        </div>

        <a href="/apply" className="sticky-apply apply-sticky">Apply Now</a>
      </main>

      <Footer />
    </>
  );
}
