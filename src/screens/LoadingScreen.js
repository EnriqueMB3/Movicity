import React from 'react'
import Logo from '../assets/logo.png'
import CityMovie from '../assets/citymovie.png'

export default function LoadingScreen() {
  return (
    <section className="container-loading">
    <div className="section1">
            <img className="logo" src={Logo}/>
    </div>
    <div className="section2">
        <img className="logo" src={CityMovie}/>

    </div>
</section>     
  )
}
