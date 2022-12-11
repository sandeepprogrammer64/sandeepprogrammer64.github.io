import React from 'react';
import "./Form.css";

function Form() {
  return <form className='form'>
      <div className="form-input">
        <input type="text" placeholder='Your Name Sir/Mam' />
      </div>
      <div className="form-input">
        <input type="text" placeholder='Your Email Sir/Mam' />
      </div>

      <div className='form-input'>
          <textarea rows="10" placeholder='Write Message'>

          </textarea>
      </div>

      <button className='submit-btn' type='submit'>Submit</button>
  </form>
}

export default Form