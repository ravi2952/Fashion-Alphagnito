import React from 'react';
import './Special.css';
import Img from '../../../assets/WATCH NOW.png';

export default function Special() {
  return (
    <div class='container-fluid Special'>
        <div className="special-hedaing">
          <h1>Today's Theme</h1>
        </div>
        <div className="Special-img">
            <img src={Img} alt="" class='w-100'/>
        </div>
    </div>
  )
}
