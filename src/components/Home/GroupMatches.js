import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { competitionList } from './../../helper/config.js';

import CompetitionTitle from '../General/CompetitionTitle';
import Match from './../General/Match';
import Tooltip from '../General/Tooltip.js';

import PropTypes from 'prop-types';

const GroupMatches = ({ name, matches }) => {
  const icon = matches[0].competition.area.ensignUrl;
  const country = matches[0].competition.area.name;
  const compId = matches[0].competition.id;
  const { route } = competitionList.find(({ id }) => id === compId);

  return (
    <Table responsive hover size=''>
      <thead className='alert-info border'>
        <tr>
          <th colSpan='5'>
            <CompetitionTitle name={name} img={icon} country={country} />
          </th>
          <th className='right'>
            <Tooltip tip='Competition standing'>
              <Link to={`/competition/${route}`} className='custom-link'>
                Standing
              </Link>
            </Tooltip>
          </th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match) => (
          <Match match={match} styles='custom-link' key={match.id} />
        ))}
      </tbody>
    </Table>
  );
};

GroupMatches.propTypes = {
  name: PropTypes.string.isRequired,
  matches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GroupMatches;
