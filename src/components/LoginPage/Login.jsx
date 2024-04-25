import React from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const Navigate = useNavigate();

  return (
    <div className='Login-page-bg'>
        <div className="container">
            <div className="loginFlex">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="loginForm">
                            <h4>Login</h4>
                            <input type= "email" placeholder='abc@gmail.com' />
                            <input type="pass" placeholder='Password' />
                            <button onClick={() => Navigate('/')} className='Login-button'>Login</button>
                            <p>or</p>
                            <button className='OTP-button'>Request OTP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
