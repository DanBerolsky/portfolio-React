import React from 'react';
import './App.css';
import Avatar from './avatar-card';
import Education from './Education-card';
import Info from './info-card';
import Proyects from './proyects-card';
import TechStack from './tech-stack-card';
import SwiperCard from './swiper-card2';
import ReactGA from 'react-ga4';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);


export function App() {
  return (
    <>
      <div className='mainConteiner'>
        <Avatar />
        <Info />
        <Proyects />
        <Education />
        <TechStack />
        <SwiperCard />
      </div>
    </>
  )
}
