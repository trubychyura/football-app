import React from 'react';
import { Table } from 'react-bootstrap';
import Match from './../General/Match';
import PropTypes from 'prop-types';

const Matchday = ({ matchday, matches }) => (
  <Table size='sm' className='mb-3' hover>
    <thead className=' border alert-warning'>
      <tr>
        <th colSpan='6' className='left'>
          Matchday: {matchday}
        </th>
      </tr>
    </thead>
    <tbody>
      {matches.map((match) => (
        <Match match={match} key={match.id} />
      ))}
    </tbody>
  </Table>
);

Matchday.propTypes = {
  matchday: PropTypes.string,
  matches: PropTypes.array.isRequired,
};

export default Matchday;
