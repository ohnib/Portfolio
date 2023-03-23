import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../components/css/form.css'

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1g9rbcl', 'template_jbhzvd8', form.current, 'ccnKAF7OyTlHGlaz2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <div className='form-container'>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor='name'>Name</label>
          <input type="text" name="user_name" id='name'/>

          <label htmlFor='email'>Email</label>
          <input type="email" name="user_email" id='email'/>
          
          <label className='form-message'>Message</label>
          <textarea name="message" />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default Form