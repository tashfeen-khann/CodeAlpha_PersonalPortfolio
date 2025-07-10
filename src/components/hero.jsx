import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import '../style/hero.css';
import { Link } from 'react-router-dom';
function Hero() {



    return (
        <div className="hero-section container-fluid position-relative overflow-hidden ">
            <div className="hero-inner row">
                <div className="col-lg-6 ps-lg-5 col-12 text-lg-start pt-5 pe-2 mt-5 mb-lg-5 ">
                    <h1 className="hero-title">FRONTEND<br></br> DEVELOPER</h1>
                    <p className="hero-subtitle">I am Tashfeen a web-developer with the passion for creating beautiful and responsive websites</p>

                    <a href="#portfolio">
                        <button className="btn btn-primary btn-start">
                            View My Work
                        </button>
                    </a>

                </div>
                <div className="col-lg-6 col-12 position-relative">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/ea62f7cb-9218-41bc-ae76-7b549ba40021/yyysDQxufL.json" className="heroIllustration"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
