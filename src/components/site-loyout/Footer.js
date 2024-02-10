import React from 'react'
import { FaFacebook, FaTwitter, FaSquarespace, FaPaperPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link scroll-link">home</a>
        </li>
        <a href="#about" className="footer-link scroll-link">about</a>
        <a href="#services" className="footer-link scroll-link">services</a>
        <a href="#featured" className="footer-link scroll-link">featured</a>
        <a href="#gallery" className="footer-link scroll-link">gallery</a>
      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon">
            <i><FaFacebook /></i>
          </a>
        </li>
        <a href="https://www.twitter.com" target="_blank" className="footer-icon">
          <i><FaTwitter /></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" className="footer-icon">
          <i><FaSquarespace /></i>
        </a>
      </ul>
      <p className="copyright">
        copyright © <i className='me-2 nav-icon'><FaPaperPlane /></i>
        <span>JetSetGo</span> company <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}

export default Footer