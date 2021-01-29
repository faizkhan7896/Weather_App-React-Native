import React, { useState, createContext, useCallback, useEffect } from 'react';
import { GeoCoordinates } from 'react-native-geolocation-service';
import {
  getLocation,
  requestLocationPermission,
} from '../../services/RequestLocation';

interface LocationContext {
  requestLocation: () => void;
  location: GeoCoordinates;
}

export const LocationContext = createContext<LocationContext>();

export function LocationProvider({ children }: React.FC): React.FC {
  const [location, setLocation] = useState<GeoCoordinates>('');
  const [permission, setPermission] = useState(false);

  const requestPermission = useCallback(async () => {
    const hasPermission = await requestLocationPermission();
    setPermission(hasPermission);
  }, []);

  const requestLocation = useCallback(() => {
    getLocation(setLocation);
  }, []);

  useEffect(() => {
    if (permission) requestLocation();
  }, [permission, requestLocation]);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  return (
    <LocationContext.Provider value={{ location, requestLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
