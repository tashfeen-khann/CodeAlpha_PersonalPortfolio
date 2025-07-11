import React from 'react';
import '../style/services.css';
// ✅ Correct
import { CgWebsite } from "react-icons/cg";
import { FaWordpressSimple } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaSearchengin } from "react-icons/fa6";
const services = [
  {
    icon: <CgWebsite size={32} color="#5b6b76" />,
    title: 'Website Development',
    description: `Experienced React.js developer building fast, responsive, and scalable web apps with clean UI and modern JavaScript practices.`,
  },
  {
    icon: <SiCanva size={32} color="#526c75" />,
    title: 'Canva Design',
    description: `Creating eye-catching social media posts, videos, and marketing content using Canva. Perfect for brands, influencers, and businesses looking for scroll-stopping visuals.`,
  },
  {
    icon: <FaWordpressSimple size={32} color="#5b6b76" />,
    title: 'WordPress Development',
    description: `Designing and customizing responsive WordPress websites for businesses, blogs, and portfolios. Fast, functional, and easy to manage.`,
  },
  {
    icon: <FaSearchengin size={32} color="#526c75" />,
    title: 'SEO',
    description: `Improve rankings, increase traffic, and grow your online presence.Let me know if you want to focus on local SEO`,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="gradient-heading">MY SERVICES</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="icon-title-row">
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
