import React from 'react'
import './App.css'
import Avatar from './avatar-card'
import Education from './Education-card'
import Info from './info-card'
import Proyects from './proyects-card'
import TechStack from './tech-stack-card'
import SwiperCard from './swiper-card2'

export function App() {
  return (

    <div className='mainConteiner'>
      <Avatar />
      <Info />
      <Proyects />
      <Education />
      <TechStack />
      <SwiperCard />

      <script async src={{"":concat("https://www.googletagmanager.com/gtag/js?id=",process.env.REACT_APP_GA)}}></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', process.env.REACT_APP_GA);
      </script>
    </div>


  )
}
