import { GeoCoordinates } from 'react-native-geolocation-service';
import useSwr from 'swr';
import { FetchCurrentDTO } from '../../dtos/FetchCurrentDTO';
import { fetchCurrentDataByGPS } from '../../services/CurrentData';

interface Resolve {
  data: FetchCurrentDTO | undefined;
  isLoading: boolean;
  isError: any;
  revalidate: () => void;
}

export function useSWR(location: GeoCoordinates): Resolve {
  const { data, revalidate, isError, isLoading } = useSwr(
    location ? [location.latitude, location.longitude] : null,
    fetchCurrentDataByGPS,
  );

  return {
    data,
    isError,
    isLoading,
    revalidate,
  };
}
