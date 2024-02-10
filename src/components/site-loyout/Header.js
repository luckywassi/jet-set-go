import { useState } from 'react'
import { FaBars, FaFacebook, FaTwitter, FaSquarespace, FaPaperPlane } from 'react-icons/fa'
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import routes from "../../lib/routes";

const Header = () => {

  const [showLinks, setShowLinks] = useState(false);

  const handleMenuClick = () => {
    setShowLinks(prev => !prev);
  }

  return (
    <header id="home">

      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to={routes.home} className='nav-icon'>
              <i className='me-2'><FaPaperPlane /></i>
              <span>JetSetGo</span>
            </Link>
            <button type="button" className="nav-toggle" onClick={handleMenuClick}>
              <i><FaBars /></i>
            </button >
          </div >
          <ul className={classNames("nav-links", {
            "show-links": showLinks
          })}>
            <li className='nav-item'>
              <Link to={routes.flights} className="nav-link">
                flights
              </Link>
            </li >
            <li className='nav-item'>
              <Link to="/#featured" className="nav-link scroll-link">
                featured
              </Link>
            </li >
            <li className='nav-item'>
              <Link to="/#gallery" className="nav-link scroll-link">
                gallery
              </Link>
            </li >
            <li className='nav-item'>
              <Link to="/#about" className="scroll-link nav-link">
                about
              </Link>
            </li >
          </ul >
          <ul className="nav-icons" >
            <li>
              <a href="https://www.twitter.com" target="_blank" className="nav-icon">
                <i><FaFacebook /></i>
              </a>
            </li >
            <li>
              <a href="https://www.twitter.com" target="_blank" className="nav-icon">
                <i><FaTwitter /></i>
              </a >
            </li >
            <li>
              <a href="https://www.twitter.com" target="_blank" className="nav-icon">
                <i><FaSquarespace /></i>
              </a >
            </li >
          </ul >
        </div >
      </nav >
    </header >
  )
}

export default Header