import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Form from '../Form'
import github from '../imgs/github.svg'
import whatsapp from '../imgs/whatsapp.svg'
import linkedin from '../imgs/linkedin.svg'
import profile from '../imgs/profile_contacts.png'
import '../css responsivo/ResponsivoContacts.css'
import '../css/contacts.css'


const Contacts = () => {
  return(
    <>
      <Header /> 
        <div className='grid-container'>
            <section>
                <h1 className='titulo-contacts'>CONTACT ME</h1>
                <h2 className='subtitulo-contacts'>Get to know me better via any <br></br> of those medias!<br></br></h2>
            </section>
            <section>
                <div className='github-section'> 
                  <img src={github}/> GITHUB
                </div>

                <div className='linkedin-section'>
                  <img src={linkedin}/> LINKEDIN
                </div>

                <div className='whatsapp-section'>
                  <img src={whatsapp}/> (44)9 8831-5949
                </div>

            </section>
            <section id='sec3'>
              <img src={profile} style={{width: '280px', height: '280px'}}/>
            </section>
        </div>
        <Form />
        <Footer />
    </>
  )
}

export default Contacts