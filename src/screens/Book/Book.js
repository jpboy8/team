import React from 'react'
import bgImage from '../../video/background.mp4'
import './Book.css'

export default function Book() {
  return (
    <div className="screen-container">
      <div className="main2">
        <video preload="auto" autoPlay="true" loop="true" muted="true">
          <source src={bgImage} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="text">
          <h1>
            Professional<br />
            photographer in Almaty</h1>
        </div>

        <div className="text-wrapper">
          <button type="button" onClick={() => window.open("https://api.whatsapp.com/send/?phone=77777060077&text&app_absent=0")}>Order a photo shoot</button>
          <button type="button" onClick={() => window.open("https://api.whatsapp.com/send/?phone=77777060077&text&app_absent=0")}>Call</button>
        </div>

        <img src="https://static.tildacdn.com/tild3430-3062-4438-a135-653465613865/iconfinder-icon_1.svg" className="icon"></img>
      </div>

    </div>
  );
}
