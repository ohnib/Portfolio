import React from 'react'
import '../components/css/form.css'

const Form = () => {
  return (
    <>
        <div className='form-container'>
            <form>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text'/>

                <label htmlFor='email'>Email</label>
                <input id='email' type='email'/>
            </form>
        </div>
    </>
  )
}

export default Form