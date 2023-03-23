import React from 'react'
import '../components/css/header.css'

const Header = () => {
  const [open, setOpen] = React.useState(true);
  function toggleMenu()
  {
    setOpen(!open)
  }

  return (
    <>
        <header>
          <div className='header-container'>
            <h1 className='header-logo'>GABRIEL</h1>
            <nav className='header-nav menu-ativo'>
              <div className='menu-mobile-container'  onClick={toggleMenu}>
                <span className={open ? 'menu-mobile' : 'menu-mobile-close'}>

                </span>
              </div>
              <ul className={open ? 'header-none' : ''}>
                <li><a href='/'>ABOUT ME</a></li>
                <li><a href='/Experience'>EXPERIENCE & SKILLS</a></li>
                <li><a href='/Contacts'>CONTACTS</a></li>
              </ul>
            </nav>
          </div> 
        </header>
    </>
  )
}

export default Header