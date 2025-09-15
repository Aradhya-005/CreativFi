import React from 'react'
import { Link } from 'react-router-dom'
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
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>
        
        <div className="footer-legal">
          <h3>Legal</h3>
          <ul>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:creativFi@gmail.com" target='_blank' rel="noreferrer">creativFi@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" target='_blank' rel="noreferrer">+123 456 7890</a></p>
        </div>
        
        <div className="footer-social-media">
          <h3>Follow Us</h3>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; CreativFi@2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
