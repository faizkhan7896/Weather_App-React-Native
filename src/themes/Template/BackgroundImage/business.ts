import { Image } from 'react-native';
import DayCloud from '../../../assets/images/day-cloud.png';
import DayMidday from '../../../assets/images/day-midday.png';
import HeavyRain from '../../../assets/images/heavy-rain.png';
import NightClear from '../../../assets/images/night-clear.png';
import NightRain from '../../../assets/images/night-rain.png';
import SunsetClear from '../../../assets/images/sunset-clear.png';
import SunsetCloud from '../../../assets/images/sunset-cloud.png';
import Snow from '../../../assets/images/snow.png';

const BusinessImage = (weatherIcon: string): string => {
  const imagesAndIcons = {
    '01d': DayMidday,
    '01n': NightClear,
    '02d': SunsetClear,
    '02n': NightClear,
    '03d': DayCloud,
    '03n': NightClear,
    '04d': SunsetCloud,
    '04n': NightClear,
    '09d': HeavyRain,
    '09n': NightRain,
    '10d': HeavyRain,
    '10n': NightRain,
    '11d': HeavyRain,
    '11n': NightRain,
    '13d': Snow,
    '13n': Snow,
    '50d': SunsetCloud,
    '50n': SunsetCloud,
  };

  const getUrlAssets = (iconName) => {
    const png = imagesAndIcons[iconName];
    const url = Image.resolveAssetSource(png).uri;
    return url;
  };

  const name = weatherIcon || '01d';

  const url = getUrlAssets(name);
  return url;
};

export default BusinessImage;
