import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
        <p><Link className='link' to='/home'>Home</Link></p>
        <p><Link className='link' to='/about'>About</Link></p>
        <p><Link className='link' to='/contact'>Contact</Link></p>
        <p><Link className='link' to='/chars'>Characters</Link></p>
    </div>
  )
}

export default Navbar