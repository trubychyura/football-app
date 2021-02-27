import React from 'react';
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { competitionList, spinnerList } from '../../helper/config';
import { fetchCompetitionInfo } from '../../helper/fetchData';
import { useFetchData } from '../../hooks/useFetchData';

import Spinner from '../General/Spinner';

const { headerSpinner } = spinnerList;

const CompetitionHeader = () => {
  const { name } = useParams();

  const competition = competitionList.find(({ route }) => route === name);
  const spinnerName = headerSpinner.name;

  const data = useFetchData(fetchCompetitionInfo, [name], spinnerName, name);

  const { name: competitionName, area, season, currentMatchday } = data;

  return (
    <Col className='p-2 d-flex align-items-center competition-header '>
      <Spinner {...headerSpinner}>
        <Row>
          <Image
            src={competition.iconRoute || ''}
            className='competition-logo'
            rounded
            thumbnail
          />
        </Row>
        <Row>
          <ListGroup className='mx-5 ' variant='flush'>
            <ListGroup.Item className='bg-light'>
              <span className='h1 text-primary'>{competitionName}</span>
            </ListGroup.Item>
            <ListGroup.Item className='bg-light'>
              <strong>Area:</strong> {area}
            </ListGroup.Item>
            <ListGroup.Item className='bg-light'>
              <strong>Current season:</strong> {season}
            </ListGroup.Item>
            <ListGroup.Item className='bg-light'>
              <strong>Curent matchday:</strong> {currentMatchday}
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Spinner>
    </Col>
  );
};

export default CompetitionHeader;
