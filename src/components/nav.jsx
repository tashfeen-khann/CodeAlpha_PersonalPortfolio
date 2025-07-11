import React, { useEffect, useState } from 'react';
import '../style/nav.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logotkk.png'; // Adjust the path as necessary
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-border-gradient ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" style={{ height: '40px', width: 'auto' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li> */}
               <li className="nav-item">
                <Link className="nav-link" to="/#">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" smooth to="/home#services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/home#technologies">Technologies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/home#portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/home#about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
