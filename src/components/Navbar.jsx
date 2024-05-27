import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navImg from '../../public/images/logo.png'
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className='navImg' src={navImg} alt="" />
      </div>
      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
