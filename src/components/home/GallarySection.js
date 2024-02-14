import React, { useMemo } from 'react'
import Tour1 from "../../assets/images/tour-1.jpeg";
import Tour2 from "../../assets/images/tour-2.jpeg";
import Tour3 from "../../assets/images/tour-3.jpeg";
import Tour4 from "../../assets/images/tour-4.jpeg";
import Tour5 from "../../assets/images/tour-5.jpeg";
import Tour6 from "../../assets/images/tour-6.jpeg";
import { FaSearch } from "react-icons/fa";

const GallarySection = () => {

  const images = useMemo(() => ([
    { src: Tour1, alt: "Tour 1" },
    { src: Tour2, alt: "Tour 2" },
    { src: Tour3, alt: "Tour 3" },
    { src: Tour4, alt: "Tour 4" },
    { src: Tour5, alt: "Tour 5" },
    { src: Tour6, alt: "Tour 6" },
    { src: Tour1, alt: "Tour 7" },
    { src: Tour2, alt: "Tour 8" },
  ]), []);

  return (
    <section id="gallery">
      <div className="gallery-center">
        {images.map(img => (
          <div className="gallery-img-container" key={img.alt}>
            <img className="gallery-img" src={img.src} alt={img.alt} />
            <a href="#" className="gallery-icon"><i><FaSearch /></i></a>
          </div>
        ))}

      </div>
    </section>
  )
}

export default GallarySection