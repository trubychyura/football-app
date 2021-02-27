import { competitionList } from './config';

export const getDate = (string = formDate()) => {
  const date = new Date(string);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

  const numberDay = date.getDay();
  const hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  const minutes = date.getMinutes() === 0 ? '00' : date.getMinutes();

  return { year, month, day, hours, minutes, numberDay };
};

export const formDate = (days = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + +days);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

  return `${year}-${month}-${day}`;
};

export const getCompetitionId = (name) =>
  competitionList.find(({ route }) => route === name).id || null;
