import '../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';




function Footer () {
    return(
        <footer class="footer">
          <div class="bottom-links"> {/* bottom links to the different pages*/}
            <div class="links">
              <span>More Info</span>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>

            <span>Social Links: </span>
            <div class="social-media-icons"> {/* Links to my personal social media pages */}
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
          </div>
        </footer>

    );
}

export default Footer; 