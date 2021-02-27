import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import './styles/styles.scss';

import ModalState from './context/modal/modalState';
import SpinnerState from './context/spinner/spinnerState';

import Home from './components/Home/Home';
import Competition from './components/Competition/Competition';
import TeamProfile from './components/TeamProfile/TeamProfile';
import MatchProfile from './components/General/MatchProfile';
import Navigation from './components/Navigation/Navigation';
import ErrorBoundary from './components/General/ErrorBoundary';

export default function App() {
  return (
    <ModalState>
      <SpinnerState>
        <Container fluid>
          <Row className='align-items-start p-2 p-lg-0'>
            <Navigation />
            <ErrorBoundary>
              <Switch>
                <Route path='/competition/:name' component={Competition} />
                <Route path='/team-profile/:teamId' component={TeamProfile} />
                <Route path={['/', '/live-data']} component={Home} />
              </Switch>
            </ErrorBoundary>
          </Row>
        </Container>
        <MatchProfile />
      </SpinnerState>
    </ModalState>
  );
}
