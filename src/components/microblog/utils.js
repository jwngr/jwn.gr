const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthAbbreviations = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
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
  var dayOfMonth = date.getUTCDate();
  var month = date.getUTCMonth() + 1;
  var year = date.getUTCFullYear();

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
  var dayOfMonth = d.getUTCDate();
  var month = monthAbbreviations[d.getUTCMonth()];

  return `${month} ${dayOfMonth}`;
}

export function getFormattedDate(date) {
  var d = new Date(date);
  var weekday = weekdays[d.getUTCDay()];
  var dayOfMonth = d.getUTCDate();
  var month = months[d.getUTCMonth()];

  return `${weekday}, ${month} ${dayOfMonth}`;
}

export function getDateRange(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);

  var startDayOfMonth = start.getUTCDate();
  var startMonth = months[start.getUTCMonth()];

  var endDayOfMonth = end.getUTCDate();
  var endMonth = months[end.getUTCMonth()];

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
