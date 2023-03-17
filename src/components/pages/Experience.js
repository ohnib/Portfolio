import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import skills from '../imgs/skills.png'
import Timeline from '../Timeline'
import '../css/experience.css'

const Experience = () => {
  return (
    <>
        <Header />
            <div className='introduction'>
              <h1 className='titulo'>EXPERIENCE & SKILLS</h1>

              <img src={skills}/>
            </div>
            
            <div className='skills-bar'>
              <div className='bar'>
                <div className='info'>
                  <span>GIT & GITHUB</span>
                </div>
                <div className='percentage-bar git'>
                  <span></span>
                </div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>API's</span>
                </div>
                <div className='percentage-bar api'>
                  <span></span>
                </div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>Positioning UI & UX</span>
                </div>
                <div className='percentage-bar positioning'>
                  <span></span>
                </div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>Algorithms and Logic</span>
                </div>
                <div className='percentage-bar logic'>
                  <span></span>
                </div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>Web Development</span>
                </div>
                <div className='percentage-bar web'>
                  <span></span>
                </div>
              </div>
            </div>
              
        <Footer />  
    </>
  )
}

export default Experience