import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/modal/modalContext';
import { SpinnerContext } from '../../context/spinner/spinnerContext';
import { Modal, Row, Col, ListGroup } from 'react-bootstrap';
import { fetchMatch } from '../../helper/fetchData';
import { getDate } from '../../helper/helper';
import { spinnerList } from '../../helper/config';
import Spinner from './Spinner';
import MatchScore from '../Competition/MatchScore';
import CompetitionTitle from './CompetitionTitle';

const initialMatch = {
  competition: {
    name: null,
    area: {},
  },
  score: {
    halfTime: {},
    fullTime: {},
  },
};

const { modalSpinner } = spinnerList;

const MatchProfile = () => {
  const [match, setMatch] = useState(initialMatch);

  const {
    hideModal,
    modal: { matchId, visible },
  } = useContext(ModalContext);

  const { hideSpinner, showSpinner } = useContext(SpinnerContext);
  const spinnerName = modalSpinner.name;

  const fetchData = async () => {
    if (!visible) return;

    showSpinner(spinnerName);
    const data = await fetchMatch(matchId);
    setMatch(data);
    hideSpinner(spinnerName);
  };

  useEffect(fetchData, [matchId]);
  if (!visible) {
    return null;
  }
  const {
    competition,
    homeTeam,
    awayTeam,
    matchday,
    score,
    venue,
    head2head,
    utcDate,
  } = match;
  const { year, day, month, hours, minutes } = getDate(utcDate);

  return (
    <Modal show={visible} onHide={hideModal} size='lg'>
      <Spinner {...modalSpinner}>
        <Modal.Header closeButton>
          <CompetitionTitle
            name={competition.name}
            country={competition.area.name}
            img={competition.area.ensignUrl}
          />
        </Modal.Header>
        <Modal.Body>
          <Row className='h3 mb-2 '>
            <Col xs={5} className='text-right'>
              {homeTeam}
            </Col>
            <Col xs={2} className='text-center'>
              <MatchScore score={score.fullTime} styles='mx-auto' />
            </Col>
            <Col xs={5}>{awayTeam}</Col>
          </Row>
          <ListGroup
            variant='flush'
            className='text-center font-weight-normal h5 w-50 mx-auto my-4'
          >
            <ListGroup.Item>
              Kick off:
              <span className='font-weight-bold ml-2'>
                {hours}:{minutes}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              Date:
              <span className='font-weight-bold ml-2'>
                {day}/{month}/{year}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              Matchday:
              <span className='font-weight-bold ml-2'>{matchday}</span>
            </ListGroup.Item>
            {score.winner && (
              <>
                <ListGroup.Item>
                  Half time:
                  <MatchScore
                    score={score.halfTime}
                    styles='font-weight-bold ml-2'
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  Full time:
                  <MatchScore
                    score={score.fullTime}
                    styles='font-weight-bold ml-2'
                  />
                </ListGroup.Item>
              </>
            )}
            {venue && (
              <ListGroup.Item>
                Stadium:
                <span className='font-weight-bold ml-2'> {venue}</span>
              </ListGroup.Item>
            )}
            {head2head && (
              <ListGroup.Item>
                <p>Previous {head2head.numberOfMatches} meetings:</p>
                <div className='d-inline-flex flex-column h6'>
                  <div>HT Wins: {head2head.homeTeam.wins}</div>
                  <div>Draws: {head2head.homeTeam.draws}</div>
                  <div>AT Wins: {head2head.homeTeam.losses}</div>
                </div>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Modal.Body>
      </Spinner>
    </Modal>
  );
};

export default MatchProfile;
