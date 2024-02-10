import React from 'react'
import AboutSection from '../components/home/AboutSection'
import NewsletterSection from '../components/home/NewsletterSection';
import GallarySection from '../components/home/GallarySection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import { HeroSection } from '../components/home/HeroSection';

const Home = () => {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <NewsletterSection />
      <GallarySection />
    </>
  )
}

export default Home