import { BASE_URL, DEFAULT_LIMIT, API_TOKEN } from './config';
import { formDate, getCompetitionId } from './helper';

export const fetchData = async (path, query = '') => {
  const response = await fetch(BASE_URL + path + query, {
    method: 'GET',
    headers: {
      'X-Auth-Token': API_TOKEN,
    },
  });
  const data = await response.json();
  return data;
};

export const fetchTeamData = async (teamId) => {
  const pathname = `/teams/${teamId}`;
  const data = await fetchData(pathname);

  return data;
};

export const fetchMatch = async (matchId) => {
  const pathname = `/matches/${matchId}`;
  const data = await fetchData(pathname);
  const {
    head2head,
    match: {
      id,
      competition,
      utcDate,
      status,
      venue,
      matchday,
      score,
      homeTeam,
      awayTeam,
    },
  } = data;
  return {
    head2head,
    id,
    utcDate,
    status,
    venue,
    matchday,
    score,
    homeTeam: homeTeam.name,
    awayTeam: awayTeam.name,
    competition,
  };
};

export const fetchCompetitionInfo = async (compName) => {
  const compId = getCompetitionId(compName);
  const pathname = `/competitions/${compId}`;
  const data = await fetchData(pathname);

  const {
    id,
    area,
    name,
    currentSeason: { startDate, endDate, currentMatchday },
  } = data;
  const season = `${startDate.substr(2, 2)}/${endDate.substr(2, 2)}`;

  return { id, area: area.name, name, season, currentMatchday };
};

export const fetchCurrentMatches = async (date) => {
  const param = date || formDate();
  const query = `?dateFrom=${param}&dateTo=${param}&competitions=2002,2003,2013,2014,2015,2016,2017,2019,2021`;
  const pathname = '/matches';
  const data = await fetchData(pathname, query);

  return data;
};

export const fetchStanding = async (
  compName,
  query = `?standingType=TOTAL`,
) => {
  const compId = getCompetitionId(compName);
  const pathname = `/competitions/${compId}/standings`;

  const data = await fetchData(pathname, query);

  return data;
};

export const fetchScorers = async (compName, query = DEFAULT_LIMIT) => {
  const compId = getCompetitionId(compName);
  const pathname = `/competitions/${compId}/scorers?limit=`;
  const data = await fetchData(pathname, query);
  return data;
};

export const fetchCompetitionMatches = async (compName, range = 0) => {
  const compId = getCompetitionId(compName);
  const pathname = `/competitions/${compId}/matches`;
  let query;
  if (range >= 0) {
    query = `?dateFrom=${formDate()}&dateTo=${formDate(
      range,
    )}&status=SCHEDULED,LIVE,IN_PLAY,PAUSED`;
  } else {
    query = `?dateFrom=${formDate(
      range,
    )}&dateTo=${formDate()}&status=FINISHED,POSTPONED,SUSPENDED,CANCELED`;
  }

  const matches = await fetchData(pathname, query);

  return matches;
};
