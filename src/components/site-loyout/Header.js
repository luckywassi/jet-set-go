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

  const hideLinks = () => {
    setShowLinks(false);
  }

  const links = [
    { name: "flights", to: routes.flights, isScrollLink: false },
    { name: "featured", to: "/#featured", isScrollLink: true },
    { name: "gallery", to: "/#gallery", isScrollLink: true },
    { name: "about", to: "/#about", isScrollLink: true }
  ];

  return (
    <header id="home">

      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to={routes.home} className='nav-icon' onClick={hideLinks}>
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
            {links.map(link => {
              const { name, to, isScrollLink } = link;
              return (
                <li className='nav-item' key={name}>
                  <Link
                    onClick={hideLinks}
                    to={to}
                    className={classNames("nav-link", {
                      "scroll-link": isScrollLink
                    })}
                  >
                    {name}
                  </Link>
                </li >
              )
            })}
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