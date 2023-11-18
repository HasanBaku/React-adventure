import React from 'react'
import { Link } from 'react-router-dom'
import "../components/footer.css"


function Footer() {

  var dates = new Date();

  return (
    <div className='footer-container'>
      <footer>
        <div className="footer-text">
            <h3>Join the Adventure newsletter to receive our best vacation deals</h3>
            <p>You can unsubscribe at any time.</p>
            <form action="">
                <input id='input' type="text" placeholder='Your Email'/>
                <input id='submit' type="submit" value='Subscribe'/>
            </form>
        </div>

        <div className="footer-links">
          <div className="first-column">
            <h3>About Us</h3>
            <Link className='Link'>How it works</Link>
            <Link className='Link'>Testimonials</Link>
            <Link className='Link'>Careers</Link>
            <Link className='Link'>Investors</Link>
            <Link className='Link'>Terms of Service</Link>
          </div>

          <div className="second-column">
            <h3>Contact Us</h3>
            <Link className='Link'>Contact</Link>
            <Link className='Link'>Support</Link>
            <Link className='Link'>Destinations</Link>
            <Link className='Link'>Sponsorships</Link>
          </div>

          <div className="third-column">
            <h3>Videos</h3>
            <Link className='Link'>Submit video</Link>
            <Link className='Link'>Ambassadors</Link>
            <Link className='Link'>Agency</Link>
            <Link className='Link'>Influencer</Link>
          </div>

          <div className="fourth-column">
            <h3>Social Media</h3>
            <Link className='Link'>Instagram</Link>
            <Link className='Link'>Facebook</Link>
            <Link className='Link'>Youtube</Link>
            <Link className='Link'>Twitter</Link>
          </div>
        </div>

        <div className="footer-down">
            <Link to='/' className='navbar-logo' >
              TRVL <i className='fab fa-typo3' />
            </Link>
            <p>TRVL © {dates.getFullYear()}</p>
            <div className="icons">
              <i className='fa-brands fa-instagram'/>
              <i className='fa-brands fa-facebook'/>
              <i className='fa-brands fa-youtube'/>
              <i className='fa-brands fa-twitter'/>
              <i className='fa-brands fa-linkedin'/>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
