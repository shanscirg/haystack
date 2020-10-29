import React from 'react'
import MissionHero from '../components/MissionHero'
import Navbar from '../components/Navbar'
import SearchHero from '../components/SearchHero'
import WelcomeHero from '../components/WelcomeHero'


const Landing = () => {
    return (
        <div>
            <Navbar/>
            <WelcomeHero/>
            <MissionHero/>
            <SearchHero/>
        </div>
    )
}

export default Landing
