import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import { BannerObj, benefitsData, FooterObj, HelpObj, items, LogoSliderObj, ReachoutObj, ResoursesObj, SonnetObj } from './data'
import LogoSlider from '../components/LogoSlider'
import Reachout from '../components/Reachout'
import Sonnet from '../components/Sonnet'
import Benefits from '../components/Benefits'
import Resoures from '../components/Resoures'
import Customersreview from '../components/Customersreview'
import Help from '../components/Help'
import Footer from '../components/Footer'

const Home = () => {
    return ( 
        <>
            <Header/>
            <Banner {...BannerObj}/>
            <LogoSlider {...LogoSliderObj}/>
            <Reachout {...ReachoutObj}/>
            <Sonnet {...SonnetObj}/>
            <Benefits benefitstitle="Benefits" benefitsData={benefitsData} />
            <Resoures {...ResoursesObj}/>
            <Customersreview customersreviewsmalltitle="Compliance & Productivity" customerstitle="What our customers say" items={items} />
            <Help {...HelpObj}/>
            <Footer {...FooterObj}/>
        </>
    )
}

export default Home

