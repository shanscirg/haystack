import React from 'react';
import CompareHero from '../components/CompareHero';
import MissionHero from '../components/MissionHero';
import SearchHero from '../components/SearchHero';
import WelcomeHero from '../components/WelcomeHero';
import ContactHero from '../components/ContactHero';


const Landing = () => {
    return (
        <div>            
            <WelcomeHero/>
            <MissionHero/>
            <SearchHero/>
            <CompareHero/>
            <ContactHero/>            
        </div>
    )
}

export default Landing;
