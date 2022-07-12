/** Dependencies */
import React from 'react';

/** Components */
import Nav from './Nav.js';

/** Assets */
import IMAGES from '../assets/index.js';

const Header = () => {
  return (
    <div className='main-header'>
      <img src={IMAGES.mainIcon} alt='main site branding' />
      <Nav />
    </div>
  )
}

export default Header;
