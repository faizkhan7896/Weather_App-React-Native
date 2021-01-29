import { GeoCoordinates } from 'react-native-geolocation-service';
import useSwr from 'swr';
import { FetchCurrentDTO } from '../../dtos/FetchCurrentDTO';
import { fetchCurrentDataByGPS } from '../../services/CurrentData';

interface Resolve {
  data: FetchCurrentDTO | undefined;
  isLoading: boolean;
  isError: any;
}

export function useSWR(location: GeoCoordinates): Resolve {
  console.log('USESWR', location);
  const { data, isError, isLoading } = useSwr(
    location ? [location.latitude, location.longitude] : null,
    fetchCurrentDataByGPS,
  );

  return {
    data,
    isError,
    isLoading,
  };
}
