import { useState, type FormEvent } from 'react';
import type { ContactFormData } from '../types';
import { WHATSAPP_NUMBER } from '../types';
import '../styles/contact.css';

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = [
      'Hello Villa54!',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Message: ${form.message}`,
    ]
      .map(encodeURIComponent)
      .join('%0A');

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(waLink, '_blank');
  };

  return (
    <>
      <section className="contact-hero">
        <div>
          <h1>Contact Villa54</h1>
          <p>
            We are ready to answer your questions and provide guidance on applications or
            facilities.
          </p>
        </div>
        <div>
          <img src="/images/about.jpg" alt="Villa54 Contact" />
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@domain.com"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="062 000 0000"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}
