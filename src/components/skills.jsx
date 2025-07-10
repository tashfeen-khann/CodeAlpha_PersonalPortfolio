import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { SiD3Dotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import '../style/skills.css';
import { SiCanva } from "react-icons/si";
const Skills = () => {
  return (
    <section className="skills-section " >
      <div className="container">
        <div className="row align-items-start">
          {/* Left: Skills */}
          <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="skills-heading gradient-heading mb-3  align-self-center mb-5">Tools & Technologies</h2>
            <div className="skills-content w-100">
              <div className="skills-icons justify-content-center">
                <DiCss3 color='blue' size={40} />
                <FaHtml5 color='orange' size={40} />
                <IoLogoJavascript color='gold' size={40} />
                <FaReact color='deepskyblue' size={40} />
                <FaWordpressSimple color='#21759b' size={40} />
                <SiD3Dotjs color='orange' size={40} />
                <SiVite color='orange' size={40} />
                <SiCanva size={40} color="#07B9CE"/>
              </div>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="col-lg-6 mt-0">
            <div className='skillIllustration'>
              <Player
                autoplay
                loop
                src="https://lottie.host/e18d4982-c52c-4420-b718-faa71b813b2a/RNDKsn3oJ3.json"
                className="heroIllustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
