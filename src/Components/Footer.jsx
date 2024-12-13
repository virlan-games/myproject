import React from "react";
import logo from '../images/Edify.png';
import letter from '../images/new-letter.png'; // Correct relative path
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <div className="footerbox">
        
        <img src={letter} alt="Newsletter Icon"width={'600'} height={'400'} />
        <div className="textarea">
            <div className="textheading">Get special offers, and <br/>more from Edify</div>
            <p>Subscribe to see secret scholarships,<br/> drop the moment you sign up!</p>
                <div class="textform">
                    <div class="input-container">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">Submit</button>
                    </div>
                 </div>

        </div>
      </div>

      <div className="footermain">
        <div className="footer1">
          <img src={logo} alt="Edify Logo" width={'143'} height={'32'} />
          <p>
            Let us help you yield your true academic potential for foreign
            education. To configure and discover an apt international enrolment
            strategy, get in touch!
          </p>
          <ul className="socialicons">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>

        </div>

        <div className="footer2">
          <div className="footerheading">Links</div>
          <ul>
            <li><Link to="/blog "className="footerlinks">Blog</Link></li>
            <li><Link to="/cours" className="footerlinks">Courses</Link></li>
            <li><Link to="/cours" className="footerlinks">Services</Link></li>
            <li><Link to="/cours" className="footerlinks">Partners</Link></li>
          </ul>
        </div>

        <div className="footer3">
          <div className="footerheading">Explore</div>
          <ul>
            <li><Link to="/blog"className="footerlinks">News & Events</Link></li>
            <li><Link to="/blog"className="footerlinks">Teams</Link></li>
            <li><Link to="/blog"className="footerlinks">Teams</Link></li>
            <li><Link to="/contact"className="footerlinks">Contact us</Link></li>
          </ul>
        </div>
        
        <div className="footer4">
          <div className="footerheading">Information</div>
          <ul>
            <li><i className="fa-solid fa-phone"></i> 0307-5013427</li>
            <li><i className="fa-regular fa-envelope"></i> wahab20@gamil.com</li>
            <li><i className="fa-solid fa-location-dot"></i> Faisalabad</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
