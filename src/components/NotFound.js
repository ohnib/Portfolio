import React from 'react'
import Header from './Header'
import './css/NotFound.css'
const NotFound = () => {
  return (
    <>
        <Header />
    <div className='notFound-container'>
        <h1 className='notFound-h1' style={{textAlign: 'center', fontFamily: 'monospace'}}>
          Sorry the page you were looking for cannot be found.
        </h1>
    </div>
    </>
  )
}

export default NotFound