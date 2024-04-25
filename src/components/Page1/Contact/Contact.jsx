import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div>
        <div className="contact-form">
            <div className="container-fluid">
                <h3 className='contact-form-heading'>
                    JOIN SHOPPING COMMUNITY TO <br />
                    GET MONTHLY PROMO
                </h3>
                <p className='contact-form-text'>
                    Type your Email bellow and get monthly upa=dates instantly !
                </p>
                <div className="contact-form-fields">
                <form className='contact-form-input'>
                    <input type="email" placeholder='@gmail.com'/>
                    <button>Add</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}
