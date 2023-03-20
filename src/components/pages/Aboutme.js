import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import me from '../imgs/me.png'
import brushStroke from '../imgs/brushstroke.png'
import Gear1 from '../imgs/gear-img-box.png'
import Gear2 from '../imgs/gear-img-box-2.png'
import '../css/aboutme.css'
import '../css responsivo/ResponsivoAbout.css'

const Aboutme = () => {
  return (
    <>
      <Header />
        <div className='about-container'>
            <div className='about-grid'>
            <div className='photo'>
                <h1 className='about-name'>
                GABRIEL 
                <br></br>
                &nbsp; &nbsp; VINICIUS
                </h1>
                <img src={me}/>
            </div>
            <img src={brushStroke} style={{position: 'absolute', zIndex:'-22', right:'0', top: '0'}} />

            
            <div className='about-card'>
                    <div className='about-img-box'>
                        <img src={Gear2} />
                    </div>
                    <div className='about-content'>
                        <div className='about-card-title'>
                            <h2> GENERAL SKILLS
                            <br></br>
                            <span>FRONT END</span>
                            </h2>
                        </div>
                    </div>
                    
                    <div className='about-label'>
                        <div className='about-label-text'>API INTEGRATION</div>
                        <div className='about-label-text'>BACK END BASICS</div>
                        <div className='about-label-text'>INTERACTIVE ELEMENTS</div>
                        <div className='about-label-text'>INTERFACES</div>
                        <div className='about-label-text'>RESPONSIVE DESIGN</div>
                    </div>
                </div>
            </div>
            <div className='about-technologies'>
                <h1 className='about-titulo'> 
                    <ul className='about-change-text'>
                        <li><span>{'<WEB DEVELOPER/>'}</span></li>
                        <li><span>{'<FREE LANCER/>'}</span></li>
                        <li><span>{'<REAL EXPERIENCE/>'}</span></li>
                        <li><span>{'<UI & UX DESIGNER/>'}</span></li>
                    </ul>
                </h1>
                <div className='about-icons' style={{display: 'flex'}}>
                    <p style={{padding: '10px', background: '#F0DB4F', borderRadius: '16px', textShadow: '2px 2px 1px rgb(0 0 0 / 10%)'}}>javascript</p>
                    <p style={{padding: '10px', background: '#F06529', borderRadius: '16px', textShadow: '2px 2px 1px rgb(0 0 0 / 10%)'}}>html</p>
                    <p style={{padding: '10px', background: '#2965F1', borderRadius: '16px', textShadow: '2px 2px 1px rgb(0 0 0 / 10%)'}}>css</p>
                    <p style={{padding: '10px', background: '#F0DB4F', borderRadius: '16px', textShadow: '2px 2px 1px rgb(0 0 0 / 10%)'}}>git</p>
                    <p style={{padding: '10px', background: '#333333', borderRadius: '16px', color: '#FFF', textShadow: '2px 2px 1px rgb(255 255 255 / 10%)'}}>github</p>
                    <p style={{padding: '10px', background: '#563D7C', borderRadius: '16px', textShadow: '2px 2px 1px rgb(0 0 0 / 10%)'}}>redux</p>
                    <p style={{padding: '10px', background: '#61DBFB', borderRadius: '16px', textShadow: '2px 2px 1px rgb(0 0 0 / 10%)'}}>react</p>
                    <p style={{padding: '10px', background: '#0ACF84', borderRadius: '16px', textShadow: '2px 2px 1px rgb(0 0 0 / 10%)'}}>figma</p>
                    <p style={{padding: '10px', background: '#007ACC', borderRadius: '16px', textShadow: '2px 2px 1px rgb(0 0 0 / 10%)'}}>typescript</p>
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