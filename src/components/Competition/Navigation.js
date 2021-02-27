import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { DEFAULT_NEG_RANGE, DEFAULT_POS_RANGE } from '../../helper/config';
import { useRouter } from '../../hooks/useRouter';

const CompetitionNav = () => {
  const {
    match: { url },
  } = useRouter();

  return (
    <Nav variant='pills' className='mt-4 mb-2'>
      <LinkContainer exact to={url}>
        <Nav.Link className='mr-1 p-1'>Standing</Nav.Link>
      </LinkContainer>
      <LinkContainer
        to={{
          pathname: `${url}/results`,
          search: `?range=${DEFAULT_NEG_RANGE}`,
        }}
      >
        <Nav.Link className='mx-1 p-1'>Results</Nav.Link>
      </LinkContainer>
      <LinkContainer
        to={{
          pathname: `${url}/schedule`,
          search: `?range=${DEFAULT_POS_RANGE}`,
        }}
      >
        <Nav.Link className='mx-1 p-1'>Schedule</Nav.Link>
      </LinkContainer>
      <LinkContainer to={`${url}/scorers`}>
        <Nav.Link className='ml-1 p-1'>Scorers</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default CompetitionNav;
