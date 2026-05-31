import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useScrollReveal, useRoomCards } from './hooks';
import './styles/home.css';

const ROOMS = [
  {
    title: 'Single Room',
    subtitle: 'Private & quiet',
    image: '/images/image.jpg',
    features: ['Bed', 'Dedicated Bathroom', 'Desk & Chair', 'Bookshelf', 'Wardrobe Space']
  },
  {
    title: '2 Sharing Room',
    subtitle: 'Balanced comfort',
    image: '/images/gallery3.jpg',
    features: ['Bed', 'Dedicated Bathroom', 'Desk & Chair', 'Bookshelf', 'Wardrobe Space']
  },
  {
    title: '3 Sharing Room',
    subtitle: 'Affordable living',
    image: '/images/gallery5.jpg',
    features: ['Bed', 'Dedicated Bathroom', 'Desk & Chair', 'Bookshelf', 'Wardrobe Space']
  },
  {
    title: '4 Sharing Room',
    subtitle: 'Budget-friendly',
    image: '/images/gallery2.jpg',
    features: ['Bed', 'Dedicated Bathroom', 'Desk & Chair', 'Bookshelf', 'Wardrobe Space']
  }
];

const WHY_CHOOSE = [
  'NSFAS accredited student residence.',
  '5 minutes from Alexandra Campus and 10 minutes from Sandton.',
  'Secure 24/7 armed response and surveillance.',
  'Uncapped WiFi, entertainment facilities, and communal spaces.',
  'Comfortable rooms with modern furnishings.'
];

export default function Home() {
  useScrollReveal();
  useRoomCards();

  return (
    <>
      <Header />
      <main>
        <section className="home-hero">
          <img src="/images/hero1.jpg" alt="Villa54 Student Accommodation" />
          <div className="hero-content">
            <h1>Secure & Modern Student Accommodation</h1>
            <p>NSFAS accredited residence for CJC TVET College near Alexandra Campus and Parktown.</p>
            <a href="/apply" className="apply-btn">Apply Now</a>
          </div>
        </section>

        <section className="rooms">
          <h2>Room Options</h2>
          <div className="room-grid">
            {ROOMS.map((room, idx) => (
              <div key={idx} className="room-card" role="button" tabIndex={0}>
                <div className="room-inner">
                  <div className="room-face front">
                    <h3>{room.title}</h3>
                    <p>{room.subtitle}</p>
                  </div>
                  <div className="room-face back">
                    <img src={room.image} alt={room.title} />
                    <div className="room-features">
                      <ul>
                        {room.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose Villa54?</h2>
          <div className="why-list">
            {WHY_CHOOSE.map((item, idx) => (
              <div key={idx} className="why-item">{item}</div>
            ))}
          </div>
        </section>

        <a href="/apply" className="sticky-apply">Apply Now</a>
      </main>

      <Footer />
    </>
  );
}
