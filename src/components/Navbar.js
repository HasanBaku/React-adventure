import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css'


function Navbar() {

    const [click, setClick] = useState(false);

    function handleClick() {
        if (window.innerWidth < 960) {
          setClick(!click);
        } else {
          setClick(false);
        }
      }
    
      function closeMobileMenu() {
        setClick(false);
      }
    
      useEffect(() => {
        // Add an event listener to update the menu state on window resize
        function handleResize() {
          if (window.innerWidth >= 960) {
            setClick(false);
          }
        }
    
        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);
    
        // Remove the event listener when the component unmounts to prevent memory leaks
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' >
                    TRVL <i className='fab fa-typo3' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul id='navbar-menu' className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>SIGN UP</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <div id='menu' className='mobileMenu' style={{display: click ? 'block' : 'none'}}>
            <ul>
                <li className='mobileItems'>
                    <Link to='/' className='mobile-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='mobileItems'>
                    <Link to='/services' className='mobile-links' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className='mobileItems'>
                    <Link to='/products' className='mobile-links' onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className='mobileItems'>
                    <Link to='/sign-up' className='mobile-links' onClick={closeMobileMenu}>Sign Up</Link>
                </li>
            </ul>
        </div>
    </div>
  )
  }
export default Navbar
