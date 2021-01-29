import { FetchCurrentDTO } from '../dtos/FetchCurrentDTO';
import Api from './Api';

const appID = '224f6452c866b1617d0bb56090275001';

/**
 * Get the current weather data through latitude and longitude
 */
export const fetchCurrentDataByGPS = async (
  latitude: number,
  longitude: number,
): FetchCurrentDTO => {
  const response = await Api.get<FetchCurrentDTO>(
    `weather?appid=${appID}&unit=metric&lat=${latitude}&lon=${longitude}&units=metric`,
  );

  return response.data;
};
