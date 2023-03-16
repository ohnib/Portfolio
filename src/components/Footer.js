import React from 'react'
import linkedin from './imgs/linkedin.svg'
import github from './imgs/github.svg'
import whatsapp from './imgs/whatsapp.svg'
import copyright from './imgs/copyright.svg'
import '../components/footer.css'


const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <img src={copyright} />
            <p className='name'>GABRIEL VINICIUS <br></br> {'< WEB DEVELOPER >'}</p>
            <nav className='nav'>
              <ul>
                <li><a href='tel:44988315949'><img src={whatsapp}/></a></li>
                <li className='number'> (44) 9 8831-5949</li>
                <li><a href='https://www.linkedin.com/in/gabriel-vin%C3%ADcius/'><img src={linkedin}/></a></li>
                <li><a href='https://github.com/ohnib'><img src={github}/></a></li>
              </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer