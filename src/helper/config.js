import premier from '../assets/img/premier-league.png';
import primeira from '../assets/img/primeira-league.png';
import seriaA from '../assets/img/serie-a.png';
import serieBrasil from '../assets/img/serie-brasil.png';
import league1 from '../assets/img/league1.png';
import laLiga from '../assets/img/la-liga.png';
import eradivisie from '../assets/img/eradivisie.png';
import championship from '../assets/img/championship.png';
import bundesliga from '../assets/img/bundesliga.png';

export const BASE_URL = 'http://api.football-data.org/v2';

export const API_TOKEN = 'b656134547a54e3c9c475e3c26ed7f6d';

export const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const competitionList = [
  {
    iconRoute: premier,
    order: 1,
    name: 'Premier League',
    id: 2021,
    route: 'premier-league',
  },
  {
    iconRoute: championship,
    order: 2,
    name: 'Championship',
    id: 2016,
    route: 'championship',
  },
  {
    iconRoute: bundesliga,
    order: 3,
    name: 'Bundesliga',
    id: 2002,
    route: 'bundesliga',
  },
  {
    iconRoute: laLiga,
    name: 'LaLiga',
    order: 4,
    id: 2014,
    route: 'la-liga',
  },
  {
    iconRoute: seriaA,
    id: 2019,
    name: 'Serie A',
    order: 5,
    route: 'serie-a',
  },
  {
    iconRoute: league1,
    order: 6,
    name: 'League 1',
    id: 2015,
    route: 'league-1',
  },
  {
    iconRoute: eradivisie,
    order: 7,
    name: 'Eradivisie',
    id: 2003,
    route: 'eradivisie',
  },
  {
    iconRoute: primeira,
    order: 8,
    name: 'Primeira League',
    id: 2017,
    route: 'primeira-league',
  },
  {
    iconRoute: serieBrasil,
    order: 9,
    name: 'Serie Brasil',
    id: 2013,
    route: 'serie-brasil',
  },
];

export const spinnerList = {
  headerSpinner: { name: 'competition-header-spinner', styles: 'my-6' },
  matchesSpinner: { name: 'competition-matches-spinner', styles: 'my-8' },
  standingSpinner: { name: 'competition-standing-spinner', styles: 'my-8' },
  scorersSpinner: { name: 'competition-scorers-spinner', styles: 'my-8' },
  profileSpinner: { name: 'team-profile-spinner', styles: 'my-9' },
  liveSpinner: { name: 'live-data-spinner', styles: 'my-9', variant: 'info' },
  modalSpinner: { name: 'modal-spinner', styles: 'my-10' },
  buttonSpinner: { name: 'load-button', styles: '' },
};

export const standingSettings = {
  0: {
    value: '№',
    tip: 'Team position',
  },
  1: {
    value: 'Team',
    tip: 'Team name',
  },
  2: {
    value: 'G',
    tip: 'Games',
  },
  3: {
    value: 'W',
    tip: 'Wins',
  },
  4: {
    value: 'D',
    tip: 'Total draws',
  },
  5: {
    value: 'L',
    tip: 'Total losses',
  },
  6: {
    value: 'P',
    tip: 'Total points',
  },
  7: {
    value: 'Goals',
    tip: 'Total goals',
  },
};

export const scorersSettings = {
  0: {
    value: '№',
    tip: 'Position',
  },
  1: {
    value: 'Player',
    tip: 'Player',
  },
  2: {
    value: 'Team',
    tip: 'Player`s team',
  },
  3: {
    value: 'G',
    tip: 'Total goals',
  },
};

export const DEFAULT_NEG_RANGE = -10;
export const DEFAULT_POS_RANGE = 10;
export const DEFAULT_LIMIT = 10;
export const DEFAULT_SELECT_RANGE = 10;

export const DEFAULT_QUERY = {
  limit: 10,
  pos_range: 10,
  neg_range: -10,
};

export const iconStyles = {
  size: '1.5rem',
  // className: color,
};
