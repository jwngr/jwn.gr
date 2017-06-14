const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthAbbreviations = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export function padWithZero(value) {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value;
  }
}

export function getImageKey(dayOfMonth, month, year) {
  return `${year}-${padWithZero(month)}-${padWithZero(dayOfMonth)}`;
}

export function getImageKeyFromDate(date) {
  var dayOfMonth = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  return `${year}-${padWithZero(month)}-${padWithZero(dayOfMonth)}`;
}

export function getNextDateKey(startDateKey) {
  var date = new Date(startDateKey);
  date.setDate(date.getDate() + 1);
  return getImageKeyFromDate(date);
}

export function getPreviousDateKey(startDateKey) {
  var date = new Date(startDateKey);
  date.setDate(date.getDate() - 1);
  return getImageKeyFromDate(date);
}

export function getShortFormattedDate(date) {
  var d = new Date(date);
  var dayOfMonth = d.getDate();
  var month = monthAbbreviations[d.getMonth()];

  return `${month} ${dayOfMonth}`;
}

export function getFormattedDate(date) {
  var d = new Date(date);
  var weekday = weekdays[d.getDay()];
  var dayOfMonth = d.getDate();
  var month = months[d.getMonth()];

  return `${weekday}, ${month} ${dayOfMonth}`;
}

export function getDateRange(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);

  var startDayOfMonth = start.getDate();
  var startMonth = months[start.getMonth()];

  var endDayOfMonth = end.getDate();
  var endMonth = months[end.getMonth()];

  let dateRange;
  if (startDate === endDate) {
    dateRange = `${startMonth} ${startDayOfMonth}`;
  } else if (startMonth === endMonth) {
    dateRange = `${startMonth} ${startDayOfMonth} - ${endDayOfMonth}`;
  } else {
    dateRange = `${startMonth} ${startDayOfMonth} - ${endMonth} ${endDayOfMonth}`;
  }

  return dateRange;
}
