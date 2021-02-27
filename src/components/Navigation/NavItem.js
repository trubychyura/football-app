import React from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ data }) => {
  const { iconRoute, order, name, route } = data;

  const itemClass = `nav-item mb-2 mb-xl-3 d-flex align-items-center  font-weight-bold nav-item-position order-${order}`;

  return (
    <div className={itemClass}>
      <Image
        src={iconRoute}
        className='nav-icon mr-1 mr-xl-4  d-block'
        alt='icon'
      />
      <NavLink
        className='nav-link text-custom'
        activeClassName='nav-link'
        to={{
          pathname: `/competition/${route}`,
        }}
      >
        <span className='p-2'>{name}</span>
      </NavLink>
    </div>
  );
};

NavItem.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ),
};

export default NavItem;
