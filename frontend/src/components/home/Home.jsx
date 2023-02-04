import React from 'react'
import cubeVideo from './cube.mp4'

const Home = () => {
  return (
    
    <section className="home">


      <div className="hero-heading">
        <h1>ROOKIE</h1>
        <p>Lorem ipsum dolor sit elit. Ratione, eos.</p>
      <a href="#menu"> Explore Menu</a>

        <div className="hero-title">
          <h1 className="hero-title-1">RUBIK'S</h1>
          <h1 className="hero-title-2">CUBE</h1>
        </div>
      </div>


      {/* video */}

      <div className="video-hero">
        <video className="videoSize" src={cubeVideo} alt="video" autoPlay loop muted type="video/mp4"></video>
      </div>

    </section>
  )
}

export default Home