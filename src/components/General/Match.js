import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { ModalContext } from '../../context/modal/modalContext';
import { getDate } from '../../helper/helper';

import MatchScore from '../Competition/MatchScore.js';
import Tooltip from './Tooltip';

const Match = ({ match, styles = 'match-primary' }) => {
  const { utcDate, score, homeTeam, awayTeam, id } = match;
  const { month, day, hours, minutes } = getDate(utcDate);
  const { showModal } = useContext(ModalContext);

  const iconStyles = {
    size: '1.5rem',
    className: styles,
  };

  return (
    <tr>
      <td style={{ maxWidth: '7%' }}>{`${day}.${month}`}</td>
      <td style={{ maxWidth: '7%' }}>{`${hours}:${minutes}`}</td>
      <td style={{ width: '30%' }} className='right'>
        <Link
          to={`/team-profile/${homeTeam.id}`}
          className={styles || 'text-primary'}
        >
          {homeTeam.name}
        </Link>
      </td>
      <td style={{ minWidth: '55px' }}>
        <MatchScore score={score.fullTime} />
      </td>
      <td style={{ width: '30%' }} className='left'>
        <Link
          to={`/team-profile/${awayTeam.id}`}
          className={styles || 'text-primary'}
        >
          {awayTeam.name}
        </Link>
      </td>
      <td style={{ width: '50px' }}>
        <IconContext.Provider value={iconStyles}>
          <Tooltip tip='Match profile' className={styles}>
            <FaInfoCircle onClick={() => showModal(id)} role='button' />
          </Tooltip>
        </IconContext.Provider>
      </td>
    </tr>
  );
};

Match.propTypes = {
  match: PropTypes.object.isRequired,
  styles: PropTypes.string,
};

Match.defaultProps = {
  styles: 'match-primary',
};

export default Match;
