import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useScrollReveal } from './hooks';
import './styles/about.css';

const FEATURES = [
  { title: 'Swimming Pool', description: 'Well-maintained pool supporting student wellness.' },
  { title: 'Garden & Koi Pond', description: 'Quiet outdoor spaces for calm and mental clarity.' },
  { title: '24/7 Security', description: 'Controlled access, monitoring, and rapid response.' },
  { title: 'Uncapped Wi-Fi', description: 'Reliable high-speed internet for learning.' },
  { title: 'Backup Electricity', description: 'Power continuity during load shedding.' },
  { title: 'Laundry Facilities', description: 'On-site laundry for hygiene and convenience.' },
  { title: 'Shared Kitchen', description: 'Fully equipped kitchen for student cooking.' },
  { title: 'Netflix & Entertainment', description: 'Shared entertainment areas for relaxation.' },
  { title: 'Transport Access', description: 'Transport to and from campus available.' },
  { title: 'Study-Friendly Environment', description: 'Quiet, structured spaces that support learning.' }
];

const GALLERY_IMAGES = [
  '/images/gallery6.jpg', '/images/gallery2.jpg', '/images/gallery9.jpg', '/images/gallery4.jpg',
  '/images/gallery12.jpg', '/images/gallery10.jpg', '/images/gallery2.jpg', '/images/gallery6.jpg',
  '/images/gallery4.jpg', '/images/gallery12.jpg', '/images/gallery9.jpg', '/images/gallery2.jpg',
  '/images/gallery3.jpg', '/images/gallery4.jpg', '/images/gallery5.jpg', '/images/gallery7.jpg',
  '/images/gallery2.jpg', '/images/gallery8.jpg', '/images/gallery6.jpg', '/images/gallery11.jpg'
];

export default function About() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <section className="about-hero">
          <div className="about-text">
            <h1>About Villa54</h1>
            <p>Villa54 is a secure, NSFAS-accredited student residence offering modern, comfortable accommodation close to Alexandra Campus and Sandton. We focus on safety, wellness, and a supportive learning environment.</p>
          </div>
          <div className="about-image">
            <img src="/images/about.jpg" alt="Villa54 Residence" />
          </div>
        </section>

        <section className="features">
          <h2>Student Accommodation Features</h2>
          <div className="features-grid">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="feature">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rules">
          <h2>Our Principles and Rules</h2>
          <a href="/documents/villa54-rules.pdf" download>Download Rules PDF</a>
        </section>

        <section className="gallery-belt">
          <h2>Our Residence Gallery</h2>
          <div className="belt">
            <div className="belt-track">
              {GALLERY_IMAGES.map((img, idx) => (
                <img key={idx} src={img} alt="" />
              ))}
            </div>
          </div>
        </section>

        <section className="map">
          <iframe title="Villa54 Location" src="https://www.google.com/maps?q=54%20Homestead%20Rd%20Raumaraispark%20Sandton%202096&output=embed" loading="lazy"></iframe>
        </section>
      </main>

      <Footer />
    </>
  );
}
