import React from 'react'
import './App.css'
const Avatar = React.lazy(() => import('./avatar-card'));
const Education = React.lazy(() => import('./Education-card'));
const Info = React.lazy(() => import('./info-card'));
const Proyects = React.lazy(() => import('./proyects-card'));
const TechStack = React.lazy(() => import('./tech-stack-card'));
const SwiperCard = React.lazy(() => import('./swiper-card'));
export function App() {
  return (
    <div className='mainConteiner'>
      <Avatar/>
      <Info/>
      <Proyects/>
      <Education/>
      <TechStack/>
      <SwiperCard/>
    </div>
  )
}
