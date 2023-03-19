import React from 'react'
import '../components/css/form.css'

const Form = () => {
  return (
    <>
        <div className='form-container'>
            <form>
                <label htmlFor='name'>NAME</label>
                <input id='name' type='text'/>

                <label htmlFor='email'>EMAIL</label>
                <input id='email' type='email'/>
            </form>
            <div className='form-message'>
            <h2 style={{margin: '60px 0 0 0', color:'var(--solida1)'}}>MESSAGE ME</h2>
            <textarea/>
            <button>ENVIAR</button>
            </div>
        </div>
    </>
  )
}

export default Form