import React from 'react';
import PropTypes from 'prop-types';

const MatchScore = ({ score, styles }) => (
  <span className={styles}>
    {score.homeTeam === null ? '-:-' : `${score.homeTeam} : ${score.awayTeam}`}
  </span>
);

MatchScore.propTypes = {
  score: PropTypes.object.isRequired,
  styles: PropTypes.string,
};

MatchScore.defaultProps = {
  styles: '',
};

export default MatchScore;
