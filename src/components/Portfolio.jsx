import React, { useState } from 'react';
import algocraft from '../assets/imgs/algocraft.png';
import event from '../assets/imgs/Event.png';
import ecommerce from '../assets/imgs/ecommerce.png';
import portfolio from '../assets/imgs/portfolio.png';
import bakery from '../assets/imgs/bakery.png';
import '../style/portfolio.css';
// import ecm from '../assets/video/erpcom.mp4';
import bk from '../assets/video/bakeryy.mp4';

const projects = [
  {
    img: algocraft,
    desc: "Algorithm Visualizer Website. Show visual working of DSA Algorithms",
  },
  {
    img: ecommerce,
    desc: "E-commerce site built with React & API integration, Cart & login functionality.",
  },
  {
    img: event,
    desc: "A responsive Event Management site showcasing Events work.",
  },
  {
    img: bakery,
    desc: "Helloween themed bakery website with a modern design and responsive layout.",
  },
  {
    img: portfolio,
    desc: "Agency portfolio website with a smooth and responsive layout.",
  },
];

const Portfolio = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  return (
    <section className="portfolio-section">
      <h2 className="gradient-heading mb-5" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center g-4">
          {projects.map((project, idx) => {
            const cardContent = (
              <div className="h-100 text-white border-2 portfolio-card">
                <img src={project.img} className="card-img-top" alt={`Project ${idx + 1}`} />
                <div className="card-body mt-3">
                  <p className="card-text">{project.desc}</p>
                </div>
              </div>
            );

            return (
              <div className="col-md-6 col-lg-4 mt-5" key={idx}>
                {idx === 0 ? (
                  <a
                    href="https://algo-craft-amber.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    {cardContent}
                  </a>
                )
                 : idx === 1 ? (
                  <div onClick={() => setVideoSrc(bk)} style={{ cursor: 'pointer' }}>
                    {cardContent}
                  </div>
                )
                 : idx === 2 ? (
                  <a
                    href="https://event-websitee.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    {cardContent}
                  </a>
                ) 
                : idx === 3 ? (
                  <div onClick={() => setVideoSrc(bk)} style={{ cursor: 'pointer' }}>
                    {cardContent}
                  </div>
                )
                 : idx === 4 ? (
                  <a
                    href="https://agencyportfolio-two.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Overlay */}
      {videoSrc && (
        <div className="video-overlay" onClick={() => setVideoSrc(null)}>
          <button className="close-btn" onClick={() => setVideoSrc(null)}>×</button>
          <video
            src={videoSrc}
            controls
            autoPlay
          />
        </div>
      )}

      <div style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "4px",
        background: "linear-gradient(90deg, #5b6b76, #705c65, #526c75, #b15db4, #2afadf)",
        zIndex: 2
      }} />
    </section>
  );
};

export default Portfolio;
