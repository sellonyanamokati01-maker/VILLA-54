import { Link } from 'react-router-dom';
import RoomCard from '../components/RoomCard';
import StickyApply from '../components/StickyApply';
import type { RoomOption } from '../types';
import '../styles/home.css';

const rooms: RoomOption[] = [
  {
    id: 'single',
    title: 'Single Room',
    subtitle: 'Private & quiet',
    image: '/images/image.jpg',
    features: ['Bed', 'Dedicated Bathroom', 'Desk & Chair', 'Bookshelf', 'Wardrobe Space'],
  },
  {
    id: 'two-sharing',
    title: '2 Sharing Room',
    subtitle: 'Balanced comfort',
    image: '/images/gallery3.jpg',
    features: ['Bed', 'Dedicated Bathroom', 'Desk & Chair', 'Bookshelf', 'Wardrobe Space'],
  },
  {
    id: 'three-sharing',
    title: '3 Sharing Room',
    subtitle: 'Affordable living',
    image: '/images/gallery5.jpg',
    features: ['Bed', 'Dedicated Bathroom', 'Desk & Chair', 'Bookshelf', 'Wardrobe Space'],
  },
  {
    id: 'four-sharing',
    title: '4 Sharing Room',
    subtitle: 'Budget-friendly',
    image: '/images/gallery2.jpg',
    features: ['Bed', 'Dedicated Bathroom', 'Desk & Chair', 'Bookshelf', 'Wardrobe Space'],
  },
];

const whyChooseItems = [
  'NSFAS accredited student residence.',
  '5 minutes from Alexandra Campus and 10 minutes from Sandton.',
  'Secure 24/7 armed response and surveillance.',
  'Uncapped WiFi, entertainment facilities, and communal spaces.',
  'Comfortable rooms with modern furnishings.',
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img src="/images/hero1.jpg" alt="Villa54 Student Accommodation" />
        <div className="hero-content">
          <h1>Secure & Modern Student Accommodation</h1>
          <p>
            NSFAS accredited residence for CJC TVET College near Alexandra Campus and
            Parktown.
          </p>
          <Link to="/apply" className="apply-btn">
            Apply Now
          </Link>
        </div>
      </section>

      <section className="rooms">
        <h2>Room Options</h2>
        <div className="room-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Villa54?</h2>
        <div className="why-list">
          {whyChooseItems.map((item) => (
            <div key={item} className="why-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      <StickyApply />
    </>
  );
}
