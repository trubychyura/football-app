import React from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBrand = () => {
  return (
    <NavLink to='/' className='navbar-brand my-3 mb-5 '>
      <Image alt='' src={logo} className='brand-img' />
    </NavLink>
  );
};

export default NavBrand;
