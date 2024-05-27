import React from 'react';
import './about.css';
import Image from '/images/1.jpeg';
import resume from '../../assets/Elvis-Owarieta.pdf';
const About = () => {
   return (
      <section className='about container section' id='about'>
         <h2 className='section__title'>About Me</h2>
         <div className='about__container grid'>
            <img src={Image} alt='' className='about__img' />
            <div className='about__data'>
               <div className='about__info'>
                  <p className='about__description'>
                     Experienced Kony developer with expertise in customizing
                     Infinity products using the Kony language. Skilled in
                     creating responsive user interfaces and possessing a
                     result-oriented and customer-focused approach. I have
                     expertise in the creation and integration of services and
                     operations in Quantum Fabric. I am adept at exposing
                     Transact API in Quantum Fabric and integrating fabric
                     services on Quantum Visualizer. Additionally, I have played
                     a key role in UI/UX development, translating Figma screen
                     designs into Quantum Visualizer components and screens. I
                     actively engage in client discussions to understand client
                     requirements and implement necessary changes. Furthermore,
                     I have successfully integrated fabric operations and
                     services. With my high work capacity and professional
                     skills, I am dedicated to delivering business efficiencies
                     through innovative technology solutions
                  </p>
                  <a href={resume} download='ElvisResume.pdf' className='btn'>
                     Download CV
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
