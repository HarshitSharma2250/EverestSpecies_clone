import React from 'react'
import { useState } from 'react';
import './SubScribePage.css'

export const SubScribePage = () => {

    const [state, setstate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    function Input(e) {
      setstate(e.target.value);
    }
    
    function Button() {
      if (state === '') {
        setErrorMessage('Please enter your email.');
      } else if (!state.endsWith('@gmail.com')) {
        setErrorMessage('Invalid email. Use a Gmail address.');
      } else {
        setErrorMessage('');
        setErrorMessage('Thank you for subscribing to the news and updates from the MAHAK family!')
      }
    }
    
  return (
    
      <div className="BackGroundContainer">
          <h1>Subscribe To Our Newsletter</h1>
          <div className="email">
            
          <input type="email" required placeholder='enter email' onChange={Input} value={state} />

          <button onClick={Button} > &gt; </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>  
    
  )
}
