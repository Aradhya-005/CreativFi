import React from 'react'
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-legal">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:creativFi@gmail.com" target='_blank' rel="noreferrer"> creativFi@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" target='_blank' rel="noreferrer"> +123 456 7890</a></p>
        </div>
        <div className="footer-social-media">
          <h3>Follow Us</h3>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; CreativFi@2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
