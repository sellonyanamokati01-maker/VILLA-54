import { useScrollReveal } from '../hooks/useScrollReveal';
import StickyApply from '../components/StickyApply';
import { NSFAS_APPLY_URL } from '../types';
import '../styles/apply.css';

const accreditationImages = [
  '/images/accreditation1.jpg',
  '/images/accreditation2.jpg',
  '/images/accreditation6.jpg',
  '/images/accreditation5.jpg',
  '/images/accreditation4.jpg',
  '/images/accreditation3.jpg',
];

export default function ApplyPage() {
  const pageRef = useScrollReveal<HTMLElement>();
  const accreditedRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <section ref={pageRef} className="page-content reveal">
        <h1>Apply / NSFAS Accommodation</h1>
        <a href={NSFAS_APPLY_URL} className="btn-nsfas" target="_blank" rel="noopener noreferrer">
          Apply via NSFAS
        </a>
      </section>

      <section ref={accreditedRef} className="accredited reveal">
        <h2>Accredited</h2>
        <div className="accredited-grid">
          {accreditationImages.map((src, index) => (
            <img key={src} src={src} alt={`Accreditation ${index + 1}`} />
          ))}
        </div>
        <a href={NSFAS_APPLY_URL} className="btn-nsfas" target="_blank" rel="noopener noreferrer">
          Apply via NSFAS
        </a>
      </section>

      <div className="download-section">
        <a href="/pdfs/villa54-accreditations.pdf" download className="btn-nsfas">
          Download Check-in form PDF
        </a>
      </div>

      <StickyApply className="apply-sticky" />
    </>
  );
}
