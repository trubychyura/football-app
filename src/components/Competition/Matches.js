import React, { useEffect, useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { usePrevious } from '../../hooks/usePrevious';
import { useFetchData } from '../../hooks/useFetchData';
import { fetchCompetitionMatches } from '../../helper/fetchData';
import { spinnerList } from '../../helper/config';

import Spinner from '../General/Spinner';
import LoadBtn from '../General/LoadBtn';
import Matchday from './Matchday';

const { matchesSpinner, buttonSpinner } = spinnerList;

const CompetitionMatches = () => {
  const [matches, setMatches] = useState([]);

  const {
    params: { name },
    query: { range },
    match: { url },
  } = useRouter();

  const prevUrl = usePrevious(url);

  const spinnerName =
    !prevUrl && prevUrl !== url ? matchesSpinner.name : buttonSpinner.name;

  const data = useFetchData(
    fetchCompetitionMatches,
    [range],
    spinnerName,
    name,
    range,
  );

  useEffect(() => {
    if (!data.matches) return;

    const orderingMatches = (matches) => {
      let orderedMatches = matches;

      if (range < 0) {
        orderedMatches.sort(([key1], [key2]) => +key2 - +key1);
      }

      return orderedMatches;
    };

    const sortedMatches = sortByMatchday(data.matches);
    const orderedMatches = orderingMatches(sortedMatches);

    setMatches(orderedMatches);
  }, [data.matches, range]);

  const sortByMatchday = (matches) => {
    const filteredMatches = {};

    matches.forEach((match) => {
      if (filteredMatches[match.matchday]) {
        filteredMatches[match.matchday].push(match);
      } else {
        filteredMatches[match.matchday] = [];
        filteredMatches[match.matchday].push(match);
      }
    });

    return Object.entries(filteredMatches);
  };

  return (
    <Spinner {...matchesSpinner}>
      {matches.map(([matchday, data]) => (
        <Matchday matchday={matchday} matches={data} key={matchday} />
      ))}
      <LoadBtn query='range' />
    </Spinner>
  );
};

export default CompetitionMatches;
