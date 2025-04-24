import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // You can hook this to an email service or backend
    alert('Thank you for your message!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p><strong>Home delivery service:</strong> All the city of Stockholm <strong>(redacted)</strong> and Malmo <strong>(redacted)</strong> with additional cost.</p>
      <p><strong>Place to pick up order:</strong> Via la Costa Avenue. Blue Port gated neighbourhood. We will send you the GPS Location via WhatsApp.</p>
      <p><em>Orders must be placed 2 days before for greater security, processing and availability.</em></p>
      <p>Tuesday to Saturday</p>
      <p>9 a.m. to 2 p.m.</p>

      <h1>Send us a message</h1>
      <div className="Contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Message:
          <textarea name="message" value={form.message} onChange={handleChange} rows="5" required />
        </label>
        <div className="submit-button-container">
        <button type="submit">Send Message</button>
        </div>
      </form>
      </div>
    </div>
  );
}