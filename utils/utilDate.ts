import * as dayjs from 'dayjs'

const WeekTitle = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const MounthDeclination = [
  "Января",
  "Февраля",
  "Марта",
  "Апрела",
  "Майя",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const Mounth = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export function getWeekTitle() {
  return WeekTitle;
}

export function formatDayMounth(date: Date) {
  return `${date.getDate()} ${MounthDeclination[
    date.getMonth()
  ].toLocaleLowerCase()}`;
}

export function formatMounthYear(date: Date) {
  return `${Mounth[date.getMonth()]} ${date.getFullYear()}`;
}

export function getDayWeek(date: Date) {
  const day = date.getDay();
  return day - 1 === -1 ? 7 : day - 1;
}

export function MounthInit(month: number, year: number) {
  let dateFirst = new Date(year, month, 1);
  const dateMonthNext = new Date(year, month + 1, 1);
  const weekDay = getDayWeek(dateFirst);
  const count = (+dateMonthNext - +dateFirst) / (1000 * 60 * 60 * 24) + weekDay;
  dateFirst.setDate(dateFirst.getDate() - weekDay);
  return {
    count,
    dateFirst,
  };
}

export function getNowDay() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
}

export function formatDateToGranta(date: Date) {
  return dayjs.default(date).format('YYYY-MM-DD HH:mm') 
}
