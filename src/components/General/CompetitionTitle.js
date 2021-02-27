import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const CompetitionTitle = ({ name, img, country }) => (
  <span className='d-flex align-items-center'>
    <Image src={img} className='live-icon' alt=' ' />
    <span className='text-uppercase mx-2'>{country}:</span>
    <span>{name}</span>
  </span>
);

CompetitionTitle.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  country: PropTypes.string,
};

CompetitionTitle.defaultProps = {
  img: null,
  name: '',
  country: '',
};

export default CompetitionTitle;
