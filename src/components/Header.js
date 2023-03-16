import React from 'react'
import '../components/css/header.css'

const Header = () => {
  return (
    <>
        <header>
          <div className='header-container'>
            <h1 className='header-logo'>GABRIEL</h1>
            <nav className='header-nav'>
              <ul>
                <li><a href='#'>ABOUT ME</a></li>
                <li><a href='#'>EXPERIENCE & SKILLS</a></li>
                <li><a href='#'>CONTACTS</a></li>
              </ul>
            </nav>
          </div> 

        </header>
    </>
  )
}

export default Header