import '../styles/about.css';

const galleryImages = [
  '/images/gallery6.jpg',
  '/images/gallery2.jpg',
  '/images/gallery9.jpg',
  '/images/gallery4.jpg',
  '/images/gallery12.jpg',
  '/images/gallery10.jpg',
  '/images/gallery2.jpg',
  '/images/gallery6.jpg',
  '/images/gallery4.jpg',
  '/images/gallery12.jpg',
  '/images/gallery9.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery7.jpg',
  '/images/gallery2.jpg',
  '/images/gallery8.jpg',
  '/images/gallery6.jpg',
  '/images/gallery11.jpg',
];

const features = [
  {
    id: 'pool',
    title: 'Swimming Pool',
    description: 'Well-maintained pool supporting student wellness.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21c3-2 6-2 9 0s6 2 9 0" />
        <path d="M3 16c3-2 6-2 9 0s6 2 9 0" />
        <circle cx="12" cy="7" r="3" />
      </svg>
    ),
  },
  {
    id: 'garden',
    title: 'Garden & Koi Pond',
    description: 'Quiet outdoor spaces for calm and mental clarity.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2c-4 4-6 7-6 10a6 6 0 0012 0c0-3-2-6-6-10z" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: '24/7 Security',
    description: 'Controlled access, monitoring, and rapid response.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'wifi',
    title: 'Uncapped Wi-Fi',
    description: 'Reliable high-speed internet for learning.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2 8c5-4 15-4 20 0" />
        <path d="M5 12c4-3 10-3 14 0" />
        <path d="M8 16c2-2 6-2 8 0" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    ),
  },
  {
    id: 'power',
    title: 'Backup Electricity',
    description: 'Power continuity during load shedding.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
      </svg>
    ),
  },
  {
    id: 'laundry',
    title: 'Laundry Facilities',
    description: 'On-site laundry for hygiene and convenience.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" />
        <circle cx="12" cy="13" r="4" />
        <path d="M8 6h.01M12 6h.01M16 6h.01" />
      </svg>
    ),
  },
  {
    id: 'kitchen',
    title: 'Shared Kitchen',
    description: 'Fully equipped kitchen for student cooking.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 3h16v6H4z" />
        <path d="M7 9v12M17 9v12" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  {
    id: 'entertainment',
    title: 'Netflix & Entertainment',
    description: 'Shared entertainment areas for relaxation.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="12" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    id: 'transport',
    title: 'Transport Access',
    description: 'Transport to and from campus available.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="10" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    id: 'study',
    title: 'Study-Friendly Environment',
    description: 'Quiet, structured spaces that support learning.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16v14H4z" />
        <path d="M8 22h8" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-text">
          <h1>About Villa54</h1>
          <p>
            Villa54 is a secure, NSFAS-accredited student residence offering modern,
            comfortable accommodation close to Alexandra Campus and Sandton. We focus on
            safety, wellness, and a supportive learning environment.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/about.jpg" alt="Villa54 Residence" />
        </div>
      </section>

      <section className="features">
        <h2>Student Accommodation Features</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rules">
        <h2>Our Principles and Rules</h2>
        <a href="/documents/villa54-rules.pdf" download>
          Download Rules PDF
        </a>
      </section>

      <section className="gallery-belt">
        <h2>Our Residence Gallery</h2>
        <div className="belt">
          <div className="belt-track">
            {galleryImages.map((src, index) => (
              <img key={`${src}-${index}`} src={src} alt="" />
            ))}
          </div>
        </div>
      </section>

      <section className="map">
        <iframe
          title="Villa54 Location"
          src="https://www.google.com/maps?q=54%20Homestead%20Rd%20Raumaraispark%20Sandton%202096&output=embed"
          loading="lazy"
        />
      </section>
    </>
  );
}
