import React from 'react'
import Tour1 from "../../assets/images/tour-1.jpeg";
import Tour2 from "../../assets/images/tour-2.jpeg";
import Tour3 from "../../assets/images/tour-3.jpeg";
import Tour4 from "../../assets/images/tour-4.jpeg";
import Tour5 from "../../assets/images/tour-5.jpeg";
import Tour6 from "../../assets/images/tour-6.jpeg";
import { FaMap } from 'react-icons/fa';

const FeaturedDestinations = () => {
  const tourData = [
    {
      src: Tour1,
      data: "august 26th, 2020",
      title: "Tibet Adventure",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      vitae tempore voluptatum maxime reprehenderit eum quod
      exercitationem fugit, qui corporis.`,
      location: "china",
      price: "$2100"
    },
    {
      src: Tour2,
      data: "august 26th, 2020",
      title: "Tibet Adventure",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      vitae tempore voluptatum maxime reprehenderit eum quod
      exercitationem fugit, qui corporis.`,
      location: "china",
      price: "$2100"
    },
    {
      src: Tour3,
      data: "august 26th, 2020",
      title: "Tibet Adventure",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      vitae tempore voluptatum maxime reprehenderit eum quod
      exercitationem fugit, qui corporis.`,
      location: "china",
      price: "$2100"
    },
    {
      src: Tour4,
      data: "august 26th, 2020",
      title: "Tibet Adventure",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      vitae tempore voluptatum maxime reprehenderit eum quod
      exercitationem fugit, qui corporis.`,
      location: "china",
      price: "$2100"
    }
    , {
      src: Tour5,
      data: "august 26th, 2020",
      title: "Tibet Adventure",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      vitae tempore voluptatum maxime reprehenderit eum quod
      exercitationem fugit, qui corporis.`,
      location: "china",
      price: "$2100"
    }
    , {
      src: Tour6,
      data: "august 26th, 2020",
      title: "Tibet Adventure",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      vitae tempore voluptatum maxime reprehenderit eum quod
      exercitationem fugit, qui corporis.`,
      location: "china",
      price: "$2100"
    }
  ]
  return (
    <section className="section" id="featured">
      <div className="section-title">
        <h2>featured <span>destinations</span></h2>
      </div>
      <div className="section-center featured-center ">
        {tourData.map((tour => {
          return (
            <article className="tour-card" key={tour.title}>
              <div className="tour-img-container">
                <img src={tour.src} className="tour-img" alt={tour.title} />
                <p className="tour-date">august 26th, 2020</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                  <p>6 days</p>
                </div>
                <p>
                  {tour.description}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i><FaMap /></i></span>{` `}{tour.location}
                  </p>
                  <p>from {tour.price}</p>
                </div>
              </div>
            </article>
          )
        }))}
      </div>
      <div className="tour-btn">
        <a href="#" className="btn-custom">Explore</a>
      </div>
    </section>
  )
}

export default FeaturedDestinations