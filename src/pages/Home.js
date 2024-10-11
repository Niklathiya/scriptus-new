import React from 'react'
import HeroSection from '../components/herosection/HeroSection'
import Benefits from '../components/benefits/Benefits'
import Join from '../components/join/Join'
import OwnCreation from '../components/owncreation/OwnCreation'
import Testimonials from '../components/testimonials/Testimonials'
import Popular from '../components/popular/Popular'
import Special from '../components/special/Special'
import Explore from '../components/explore/Explore'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Explore />
      <Popular />
      <Special />
      <OwnCreation />
      <Benefits />
      <Testimonials />
      <Join />
    </div>
  )
}

export default Home
