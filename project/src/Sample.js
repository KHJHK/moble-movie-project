// Sample.js
import React from 'react';
import './Bpp.css'
import { Link } from 'react-router-dom';

function check()
{
    console.log("check")
    return (
        <div> hello </div>
    )
}

function Sample() {
    return (
      <div className="Bpp">
        Sample page.

        <Link to="/MainPage" className='liA'>
            <button onClick={(e)=> {check()}}>페이지 이동</button>
        </Link>
        {check()}
      </div>
    );
  }
  
  export default Sample;