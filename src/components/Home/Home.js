import React from 'react';
import { Col, Row } from 'react-bootstrap';

import LiveMatches from './LiveMatches';
import MatchFilter from './MatchFilter';
import DatePicker from './DatePicker';

const Home = () => (
  <Col lg={8} className='border rounded mx-auto mb-2'>
    <Row className=' d-flex flex-column-reverse flex-sm-row justify-content-between p-2'>
      <MatchFilter />
      <DatePicker />
    </Row>
    <LiveMatches />
  </Col>
);

export default Home;
