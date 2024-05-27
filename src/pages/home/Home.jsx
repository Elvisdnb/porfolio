
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
import Me from '/images/logo.png'
import HeaderSocials from './HeaderSocials'
const Home = () => {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="home container" id='home'>
      <div className='intro'>
        <img src={Me} alt=""  className='home__img'/>
        <h1 className="home__name">OWARIETA OGHENERO</h1>
        <span className="home__education">Web Developer</span>
        <HeaderSocials/>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
        <a href="#contact" className="btn">Hire Me </a>
        </Link>
      </div>
    </section>
  )
}

export default Home