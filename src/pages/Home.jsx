import React from 'react'
import Hero from '../sections/Hero/Hero'
import Symptoms from '../sections/Symptoms/Symptoms'
import AsSeenIn from '../sections/AsSeenIn/AsSeenIn'
import YouBeenMissing from '../sections/YouBeenMissing/YouBeenMissing'
import DrainageSystem from '../sections/DrainageSystem/DrainageSystem'
import WhyNothing from '../sections/WhyNothing/WhyNothing'
import IngredientSystem from '../sections/IngredientSystem/IngredientSystem'
import Reviews from '../sections/Reviews/Reviews'
import Icons from '../sections/Icons/Icons'
import Expert from '../sections/Expert/Expert'
import Stories from '../sections/Stories/Stories'
import FAQ from '../sections/FAQ/FAQ'
import Stats from '../sections/Stats/Stats'
import Summary from '../sections/Summary/Summary'

const Home = () => {
  return (
    <div className=''>
        <Hero />
        <AsSeenIn />  
        <Symptoms />
        <YouBeenMissing />
        <DrainageSystem />
        <WhyNothing />
        <IngredientSystem />
        <Reviews />
        <Icons />
        <Expert />
        <Stories />
        <FAQ />
        <Stats />
        <Summary />
    </div>
  )
}

export default Home