const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * Function to format the timestamp received in Unix to Day, dd Month year | hh:mm
 * @param time timestamp in Unix
 */
export const formatToDayAndTime = (time: number): string => {
  const dateUtc = new Date(time * 1000);

  const weekday = daysInWeek[dateUtc.getDay()];
  const day = dateUtc.getDate();
  const month = months[dateUtc.getMonth()];
  const year = dateUtc.getFullYear();
  const hour = getHourAndMinute(time);

  return `${weekday}, ${day} ${month} ${year} | ${hour}`;
};

/**
 * Format timestamp received to hh:mm
 * @param time timestamp in Unix
 */
export const getHourAndMinute = (time: number): string => {
  const dateUtc = new Date(time * 1000);

  const hour = `0${dateUtc.getHours()}`.slice(-2);
  const min = `0${dateUtc.getMinutes()}`.slice(-2);

  return `${hour}:${min}`;
};

interface Dif {
  sunrise: number;
  sunset: number;
}

/**
 *  Returns the string with the dif about sunset and sunrise
 * @param param0 {sunrise: Sunrise's Timestamp, sunset: Sunset's Timestamp}
 */
export const getDifTimes = ({ sunrise, sunset }: Dif): string => {
  const sunriseUtc = new Date(sunrise * 1000);
  const sunsetUtc = new Date(sunset * 1000);

  const dif = sunsetUtc - sunriseUtc;
  const hour = `0${Math.floor((dif / (1000 * 3600)) % 24)}`.slice(-2);
  const minute = `0${Math.floor((dif / (1000 * 60)) % 60)}`.slice(-2);

  return `${hour}h ${minute}m`;
};
