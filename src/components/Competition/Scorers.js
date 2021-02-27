import React, { useEffect, useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { fetchScorers } from '../../helper/fetchData';
import { scorersSettings, spinnerList } from '../../helper/config';
import { Table } from 'react-bootstrap';

import Spinner from '../General/Spinner';
import Tooltip from '../General/Tooltip';
import LoadBtn from '../General/LoadBtn';
import { useFetchData } from '../../hooks/useFetchData';

const { scorersSpinner, buttonSpinner } = spinnerList;

const CompetitionScorers = () => {
  const [scorers, setScorers] = useState([]);

  const {
    params: { name },
    query: { limit },
  } = useRouter();
  const spinnerName = limit ? buttonSpinner.name : scorersSpinner.name;

  const data = useFetchData(fetchScorers, [limit], spinnerName, name, limit);

  useEffect(() => {
    if (!data.scorers) return;

    setScorers(data.scorers);
  }, [data.scorers]);

  return (
    <Spinner {...scorersSpinner}>
      <Table>
        <thead>
          <tr>
            {Object.entries(scorersSettings).map(([id, { value, tip }]) => (
              <th key={id}>
                <Tooltip tip={tip}>
                  <span style={{ cursor: 'default' }}>{value}</span>
                </Tooltip>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scorers.map(
            ({ player: { name, id }, team, numberOfGoals }, position) => (
              <tr key={id}>
                <td>{position + 1}</td>
                <td>{name}</td>
                <td>{team.name}</td>
                <td>{numberOfGoals}</td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
      <LoadBtn query='limit' />
    </Spinner>
  );
};

export default CompetitionScorers;
