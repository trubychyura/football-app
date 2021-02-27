import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const ProfileHeader = ({ url, name }) => (
  <Row className='d-flex align-items-center mb-3'>
    <Col as={Image} src={url} className='w-100' sm={3}></Col>
    <Col className='h1 ml-5'>{name}</Col>
  </Row>
);

ProfileHeader.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};

ProfileHeader.defaultProps = {
  url: '',
  name: '',
};

export default ProfileHeader;
