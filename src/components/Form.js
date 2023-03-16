import React from 'react'
import '../components/css/form.css'

const Form = () => {
  return (
    <>
        <div className='form-container'>
            <form>
                <h1>SEND ME AN EMAIL!</h1>
                <label htmlFor='name'>NAME</label>
                <input id='name' type='text'/>

                <label htmlFor='email'>EMAIL</label>
                <input id='email' type='email'/>
             
                <textarea/>
              
            </form>
        </div>
    </>
  )
}

export default Form