import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { fetchCurrentMatches } from '../../helper/fetchData';
import { spinnerList } from '../../helper/config';
import { useRouter } from '../../hooks/useRouter';
import { useFetchData } from './../../hooks/useFetchData';

import Spinner from '../General/Spinner';
import GroupMatches from './GroupMatches';

const { liveSpinner } = spinnerList;

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);

  const {
    query: { date, status },
  } = useRouter();

  const spinnerName = liveSpinner.name;

  const data = useFetchData(fetchCurrentMatches, [date], spinnerName, date);

  useEffect(() => {
    if (!data.matches) return;

    const sortedMatches = sortByCompetition(data.matches);
    const filteredMatches = filterByStatus(sortedMatches, status);
    setMatches(filteredMatches);
  }, [data, status]);

  const sortByCompetition = (data) => {
    const sortedMatches = {};

    data.forEach((match) => {
      const { name } = match.competition;
      if (sortedMatches.hasOwnProperty(name)) {
        sortedMatches[name].push(match);
      } else {
        sortedMatches[name] = [];
        sortedMatches[name].push(match);
      }
    });

    return Object.entries(sortedMatches);
  };

  const filterByStatus = (matches, status) => {
    switch (status) {
      case 'scheduled':
      case 'finished':
        return matches
          .map(([name, arr]) => {
            const filteredArr = arr.filter(
              (item) => item.status === status.toUpperCase(),
            );

            return [name, filteredArr];
          })
          .filter(([_, matches]) => matches.length);

      default:
        return matches;
    }
  };

  return (
    <Row className='pt-2 px-2'>
      <Spinner {...liveSpinner}>
        {matches.map(([compName, compMatches], id) => (
          <GroupMatches name={compName} matches={compMatches} key={id} />
        ))}
      </Spinner>
    </Row>
  );
};

export default LiveMatches;
