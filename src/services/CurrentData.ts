import Api from './Api';

interface Props {
  latitude: number;
  longitude: number;
}

export const fetchCurrentDataByGPS = async ({ latitude, longitude }: Props) => {
  const response = await Api.get(`lat=${latitude}&lon=${longitude}`);

  return response.data;
};
