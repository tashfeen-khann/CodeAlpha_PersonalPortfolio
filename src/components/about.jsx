import React from 'react'
import '../style/about.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container py-5">
        <h2 className="gradient-heading mb-4" style={{ fontWeight: 'bold' }}>About Me</h2>
        <div className="about-content mx-auto" style={{ maxWidth: 700 }}>
          <p className="about-text mb-4" style={{ fontSize: '1.15rem', color: '#e0e0e0' }}>
            Hi, I'm <span style={{ color: ' rgb(132, 110, 133)', fontWeight: 'bold' }}>Tashfeen</span>, I’m a passionate Front-End Developer with hands-on experience in building responsive and user-friendly web pages using React.js. I specialize in creating clean, modern UI designs and have worked on multiple web projects, ensuring both functionality and aesthetic appeal.


 </p>
          <p className="about-text" style={{ fontSize: '1.15rem', color: '#e0e0e0' }}>
         In addition to my React expertise, I have  knowledge of SEO , WordPress customization, and graphic design tools like Canva, allowing me to deliver well-rounded digital solutions that perform and look great.

Whether it's building from scratch or enhancing existing platforms, I enjoy turning ideas into interactive, engaging web experiences.
 </p>
        </div>
      </div>
    </section>
  )
}

export default About
