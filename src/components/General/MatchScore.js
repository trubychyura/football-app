import React from 'react';
import PropTypes from 'prop-types';

const MatchScore = ({ score: { homeTeam, awayTeam }, styles }) => (
  <span className={styles || ''}>{`${homeTeam} : ${awayTeam}`}</span>
);

MatchScore.propTypes = {
  homeTeam: PropTypes.string,
  awayTeam: PropTypes.string,
};

MatchScore.defaultProps = {
  homeTeam: '-',
  awayTeam: '-',
};

export default MatchScore;
