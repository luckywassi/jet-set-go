import React from 'react'
import NotFoundImg from "../assets/images/no-flight.png";

const NotFound = ({ text, className = "" }) => {
  return (
    <div className={className.concat(' not-found')}>
      <img src={NotFoundImg} alt="Not Found" className='not-found-img' />
      <h3>{text}</h3>
    </div>
  )
}

export default NotFound