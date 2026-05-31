import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useContactForm } from './hooks';
import './styles/contact.css';

export default function Contact() {
  useContactForm();

  return (
    <>
      <Header />
      <main>
        <section className="contact-hero">
          <div>
            <h1>Contact Villa54</h1>
            <p>We are ready to answer your questions and provide guidance on applications or facilities.</p>
          </div>
          <div>
            <img src="/images/about.jpg" alt="Villa54 Contact" />
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="example@domain.com" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="062 000 0000" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Type your message here..." required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
