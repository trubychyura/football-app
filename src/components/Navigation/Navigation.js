import React from 'react';
import { Col, Image, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/brand-img.png';
import { competitionList } from '../../helper/config.js';

import NavList from './NavList.js';

const Navigation = () => (
  <Col lg={3} className='bg-light border rounded vh-lg-100 mb-2 mb-lg-0 p-0'>
    <Navbar
      collapseOnSelect
      expand='lg'
      className='flex-lg-column justify-content-between justify-content-lg-start  align-items-center'
    >
      <Navbar.Brand as={NavLink} to='/' className=' my-lg-3 mb-lg-5'>
        <Image alt='nav icon' src={logo} className='brand-img' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='mt-3 w-100'>
        <NavList competitions={competitionList} />
      </Navbar.Collapse>
    </Navbar>
  </Col>
);

export default Navigation;
