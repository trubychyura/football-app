import React from 'react';
import { Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import Navigation from './Navigation';
import Header from './Header';
import Matches from './Matches';
import Scorers from './Scorers';
import Standing from './Standing';

const Competition = () => (
  <Col className='border rounded p-2 bg-light mx-auto mb-3' lg={8}>
    <Header />
    <Navigation />
    <Route exact path='/competition/:name' component={Standing} />
    <Route
      path={['/competition/:name/results', '/competition/:name/schedule']}
      component={Matches}
    />
    <Route path='/competition/:name/scorers' component={Scorers} />
  </Col>
);

export default Competition;
