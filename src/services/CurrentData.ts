import { FetchCurrentDTO } from '../dtos/FetchCurrentDTO';
import Api from './Api';

interface Props {
  latitude: number;
  longitude: number;
}

const appID = '224f6452c866b1617d0bb56090275001';

/**
 * Get the current weather data through latitude and longitude
 */
export const fetchCurrentDataByGPS = async ({
  latitude,
  longitude,
}: Props): FetchCurrentDTO => {
  const response = await Api.get<FetchCurrentDTO>(
    `weather?appid=${appID}&unit=metric&lat=${latitude}&lon=${longitude}`,
  );

  return response.data;
};
