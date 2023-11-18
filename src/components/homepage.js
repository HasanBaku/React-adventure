import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player'
import '../components/homepage.css'
library.add(faCoffee);



function Homepage() {

  return (
    <div>
     <div className="hero-section">
        <div className="text-content">
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className="twoButton">
            <Link className='get-started' to="/services">GET STARTED</Link>
            <Link className='watch-trailer' to="/services">
              WATCH TRAILER {' '}
              <i className="fa-regular fa-circle-play"></i>
            </Link>
          </div>
        </div>
        <video className="videoHero" src="assets/videos/video-1.mp4" autoPlay loop muted />
      </div>

      <div className="card-section">
        <h3>Check out these EPIC Destinations!</h3>
        <div className="cards">
            <div className="upper-cards">
                <div className="first-card">
                    <Link to='/services'>
                        <div className="upper-part">
                            <p>Adventure</p>
                        </div>
                        <p className='card-text'>Explore the hidden waterfall deep inside the Amazon Jungle</p>
                    </Link>
                </div>
                <div className="second-card">
                    <Link to='/services'>
                        <div className="upper-part">
                            <p>Adventure</p>
                        </div>
                        <p className='card-text'>Explore the hidden waterfall deep inside the Amazon Jungle</p>
                    </Link>
                </div>
            </div>

            <div className="down-cards">
                <div className="first-card">
                    <Link to='/services'>
                        <div className="upper-part">
                            <p>Adventure</p>
                        </div>
                        <p className='card-text'>Explore the hidden waterfall deep inside the Amazon Jungle</p>
                    </Link>
                </div>
                <div className="second-card">
                    <Link to='/services'>
                        <div className="upper-part">
                            <p>Adventure</p>
                        </div>
                        <p className='card-text'>Explore the hidden waterfall deep inside the Amazon Jungle</p>
                    </Link>
                </div>
                <div className="third-card">
                    <Link to='/services'>
                        <div className="upper-part">
                            <p>Adventure</p>
                        </div>
                        <p className='card-text'>Explore the hidden waterfall deep inside the Amazon Jungle</p>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
