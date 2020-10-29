import React from 'react'
import CompareHero from '../components/CompareHero'
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
            <CompareHero/>
        </div>
    )
}

export default Landing
