import React from 'react';
import '../Styles/About.css';
import image from '../Files/IMG_2103.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

//About page

function About() {
  return (
    <div className="about-container">
      <div className="profile-picture">
        <img src={image} alt="Your Name" /> {/* Picture of me*/}
      </div>
      <div className="profile-content"> {/* About me */}
        <h1 className="name">Christopher Galgano</h1>
        <p className="subtitle">Villanova '26 Computer Science</p>
        <p className="description">
          Welcome to my first website! 
          This is my site to explore web development and publish my sports analytics
          work. I am a life long New York sports fan and fantasy sports enjoyer. 
          In my computer science journey I have become proficient in Java, Python, 
          R, and I am always in the process of learning more! As a way to practice my coding
          skills, I apply it to learn more about the sports I love.
        </p>

      <div class="social-media-icons-about"> {/* Links to my personal social media pages */}
              <a href="https://www.linkedin.com/in/christopher-galgano/" target= "_blank">
                <FontAwesomeIcon icon = {faLinkedin}/>
              </a>
              <a href="https://github.com/cgalga01" target= "_blank">
                <FontAwesomeIcon icon = {faGithub}/>
              </a>             
              <a href="https://www.instagram.com/chris_galgano/" target= "_blank">
                <FontAwesomeIcon icon = {faInstagram}/>
              </a>
            </div>
        <div class ="email-link">
        <p>Contact me at: <a href={`mailto:Chrisgalgano01@gmail.com`}>chrisgalgano01@gmail.com</a></p>
        </div>
        </div>

        
    </div>
  );
}

export default About;
