import React, { useRef, useState } from 'react'
import "./contact.css";
const Contact = () => {
  const form = useRef();


  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything !</h3>
          <p className="contact__details">Don't like forms ? Send me an email.</p>
        </div>

        <form ref={form} className='contact__form'>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input"
                placeholder='Your Name' name='name' />
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input"
                placeholder='Your Email' name='email' />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" className="contact__form-input"
              placeholder='Subject' name='subject' />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" id="" cols="30" rows="30"
              className='contact__form-input'
              placeholder='Your Message'></textarea>
          </div>


          <button className='btn' type='submit'>Send Message</button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
