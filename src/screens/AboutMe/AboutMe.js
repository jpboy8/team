import React from 'react'
import { Route } from 'react-router-dom';
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className="screen-container">
      <div className="main">
          <section className="about">
                <img src='https://i.pinimg.com/originals/4f/68/c3/4f68c3143b93c937d468e0b656ade180.jpg'></img>
                <div className="about-text">
                <h1>About myself</h1>
                <h5>Photographer</h5>
                <p>
                I improve people's lives through photography. I have been working professionally in different directions for 7 years. 2,000 exclusive photosets<br />
                <b>Knowledge of programs:</b> Adobe Photoshop, Adobe Lightroom, Adobe Premiere Pro, Vegas Pro, Capture One.<br />
                <b>Education:</b> Yale School of Fine Art, USA.
                </p>

                <button type="button" onClick={() => window.location.href='http://localhost:3000'}>My works</button>
                <button type="button" onClick={() => window.location.href='http://localhost:3000/reviews'}>Reviews</button>
                <button type="button" onClick={() => window.open("https://www.instagram.com/accounts/login/?next=/theserdjo/")}>Instagram</button>

                </div>
          </section>
      </div>
    </div>
  );
}
