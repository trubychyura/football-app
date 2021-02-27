import React, { useEffect, useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchStanding } from '../../helper/fetchData';
import { spinnerList, standingSettings } from '../../helper/config';
import { useFetchData } from '../../hooks/useFetchData';
import Spinner from '../General/Spinner';
import Tooltip from '../General/Tooltip';

const { standingSpinner } = spinnerList;

const CompetitionStanding = () => {
  const [standing, setStanding] = useState([]);

  const {
    params: { name },
  } = useRouter();

  const data = useFetchData(fetchStanding, [name], standingSpinner.name, name);

  useEffect(() => {
    if (!data.standings) return;

    setStanding(data.standings[0].table);
  }, [data.standings]);

  return (
    <Spinner {...standingSpinner}>
      <Table className='mb-1' size='sm' responsive>
        <thead className='border bg-primary'>
          <tr>
            {Object.entries(standingSettings).map(([id, { value, tip }]) => (
              <th key={id}>
                <Tooltip tip={tip}>
                  <span style={{ cursor: 'default' }}>{value}</span>
                </Tooltip>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {standing.map((item) => {
            const {
              position,
              team: { id, name, crestUrl },
              playedGames,
              won,
              draw,
              lost,
              points,
              goalsFor,
              goalsAgainst,
            } = item;
            return (
              <tr className='border-tr' key={id}>
                <td>{position}.</td>
                <td className='left'>
                  <img className='team-logo mr-2' src={crestUrl} alt=' ' />
                  <Link to={`/team-profile/${id}`}>{name}</Link>
                </td>
                <td>{playedGames}</td>
                <td>{won}</td>
                <td>{draw}</td>
                <td>{lost}</td>
                <td>{points}</td>
                <td>
                  {goalsFor} : {goalsAgainst}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Spinner>
  );
};

export default CompetitionStanding;
