import Barometer from '../../../assets/icons/barometer.png';
import Humidity from '../../../assets/icons/humidity.png';
import SandClock from '../../../assets/icons/sand-clock.png';
import Sunrise from '../../../assets/icons/sunrise.png';
import Sunset from '../../../assets/icons/sunset.png';
import Wind from '../../../assets/icons/wind.png';
import { DataComponentDTO } from '../../../dtos/DataComponentDTO';
import { FetchCurrentDTO } from '../../../dtos/FetchCurrentDTO';

import { getHourAndMinute, getDifTimes } from '../../../utils/DateUtils';

export const DataBusiness = (
  fetchCurrent: FetchCurrentDTO,
): DataComponentDTO[] => {
  let humidity = '';
  let pressure = '';
  let wind = '';
  let sunrise = '';
  let sunset = '';
  let daytime = '';

  if (fetchCurrent) {
    const { sys, main, wind: windApi } = fetchCurrent;

    humidity = main.humidity;
    pressure = main.pressure / 1000;
    wind = windApi.speed;

    sunrise = getHourAndMinute(sys.sunrise);
    sunset = getHourAndMinute(sys.sunset);
    daytime = getDifTimes({ sunrise: sys.sunrise, sunset: sys.sunset });
  }

  const dataToReturn: DataComponentDTO[] = [
    {
      type: 'Humidity',
      value: humidity,
      measurement: '%',
      SVG: Humidity,
    },
    {
      type: 'Pressure',
      value: pressure,
      measurement: 'mBar',
      SVG: Barometer,
    },
    {
      type: 'Wind',
      value: wind,
      measurement: 'm/s',
      SVG: Wind,
    },
    {
      type: 'Sunrise',
      value: sunrise,
      SVG: Sunrise,
    },
    {
      type: 'Sunset',
      value: sunset,
      SVG: Sunset,
    },
    {
      type: 'Daytime',
      value: daytime,
      SVG: SandClock,
    },
  ];

  return dataToReturn;
};
