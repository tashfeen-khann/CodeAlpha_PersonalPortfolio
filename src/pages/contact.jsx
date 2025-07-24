import React, { useState } from 'react'
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import '../style/contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent!");
        setForm({ name: '', email: '', message: '' });
      } else {
alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  }
};


  return (
    <section className="contact-section mt-5">
      <h2 className="gradient-heading mb-4">Contact Me</h2>
      <p className="contact-desc mb-5">I'd love to hear from you! Fill out the form below and I'll get back to you soon.</p>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
          <span className="input-icon"><FaUser /></span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        {errors.name && <div className="form-error">{errors.name}</div>}
        <div className="input-group">
          <span className="input-icon"><FaEnvelope /></span>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        {errors.email && <div className="form-error">{errors.email}</div>}
        <div className="input-group">
          <span className="input-icon"><FaCommentDots /></span>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        {errors.message && <div className="form-error">{errors.message}</div>}
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </section>
  )
}

export default Contact