import React from 'react'
import MissionHero from '../components/MissionHero'
import Navbar from '../components/Navbar'
import WelcomeHero from '../components/WelcomeHero'


const Landing = () => {
    return (
        <div>
            <Navbar/>
            <WelcomeHero/>
            <MissionHero/>
        </div>
    )
}

export default Landing
