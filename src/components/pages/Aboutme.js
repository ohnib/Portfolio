import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import me from '../imgs/me.png'
import '../css/aboutme.css'

const Aboutme = () => {
  return (
    <>
      <Header />
        <div className='about-container'>
            <div className='photo'>
                <h1 className='about-name'>
                GABRIEL 
                <br></br>
                VINICIUS
                </h1>
                <img src={me}/>
            </div>
            <div className='about-technologies'>
                <h1 className='about-titulo'> {'<WEB DEVELOPER/>'} </h1>
                <div className='about-icons' style={{display: 'flex'}}>
                    <p style={{padding: '10px', background: '#F0DB4F', borderRadius: '16px'}}>javascript</p>
                    <p style={{padding: '10px', background: '#F06529', borderRadius: '16px'}}>html</p>
                    <p style={{padding: '10px', background: '#2965F1', borderRadius: '16px'}}>css</p>
                    <p style={{padding: '10px', background: '#F0DB4F', borderRadius: '16px'}}>git</p>
                    <p style={{padding: '10px', background: '#333333', borderRadius: '16px', color: '#FFF'}}>github</p>
                    <p style={{padding: '10px', background: '#563D7C', borderRadius: '16px'}}>redux</p>
                    <p style={{padding: '10px', background: '#61DBFB', borderRadius: '16px'}}>react</p>
                    <p style={{padding: '10px', background: '#0ACF84', borderRadius: '16px'}}>figma</p>
                    <p style={{padding: '10px', background: '#007ACC', borderRadius: '16px'}}>typescript</p>
                </div>
            </div>
        </div>
        <div className='about-skills'>
            <h3 className='about-soft'>SOFT SKILLS</h3>
            <div className='soft-skills-container' style={{ backgroundColor: '#0F0505', color: '#FFF'}}>
                <h3 style={{color: '#B33F3F'}}>Discipline</h3>
                <p>
                &nbsp; I have a strong ability of overcoming my weaknesses and pursuing what i believe
                    to be right, despite any emotion i can behave properly and work hard
                </p>
            </div>
            <div className='soft-skills-container' style={{ backgroundColor: '#03070F', color: '#FFF'}}>
                <h3 style={{color: '#225BC8'}}>Communication &nbsp; &nbsp;</h3>
                <p>
                    im open-minded for critics and i can express well and efficient information to help
                    others, or to get a feedback in a organized way
                </p>
            </div>
            <div className='soft-skills-container' style={{ backgroundColor: '#090F09', color: '#FFF'}}>
                <h3 style={{color: '#84EC88'}}>Teamwork &nbsp; &nbsp;</h3>
                <p>
                    Well developed ability to collaborate with the goals of the group and business 
                    encourage people to make good decisions and reduce their stress
                </p>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default Aboutme