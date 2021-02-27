import React from 'react';
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem.js';
import PropTypes from 'prop-types';

const NavList = ({ competitions }) => (
  <Nav className='w-100 flex-column '>
    {competitions.map((item) => (
      <NavItem data={item} key={item.id} />
    ))}
  </Nav>
);

NavList.propTypes = {
  competitions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavList;
