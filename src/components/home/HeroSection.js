import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../lib/routes'

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-banner px-0 px-sm-3">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <Link to={routes.flights} className="btn-custom hero-btn scroll-link">explore</Link>
      </div >
    </div >
  )
}
