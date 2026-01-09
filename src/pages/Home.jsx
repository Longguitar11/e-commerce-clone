import React from 'react'
import Hero from '../sections/Hero/Hero'
import Symptoms from '../sections/Symptoms/Symptoms'
import AsSeenIn from '../sections/AsSeenIn/AsSeenIn'
import YouBeenMissing from '../sections/YouBeenMissing/YouBeenMissing'
import DrainageSystem from '../sections/DrainageSystem/DrainageSystem'
import WhyNothing from '../sections/WhyNothing/WhyNothing'

const Home = () => {
  return (
    <div className=''>
        <Hero />
        <AsSeenIn />  
        <Symptoms />
        <YouBeenMissing />
        <DrainageSystem />
        <WhyNothing />
    </div>
  )
}

export default Home