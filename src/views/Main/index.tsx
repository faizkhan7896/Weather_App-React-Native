import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';

import { LocationContext } from '../../hooks/location/useLocation';
import {
  getLocation,
  requestLocationPermission,
} from '../../services/RequestLocation';

import MediumText from '../../themes/atoms/Texts/MediumText';

const Index = (): React.FC => {
  const [location, requestLocation] = useContext(LocationContext);

  return (
    <View>
      <MediumText text="49%" />
    </View>
  );
};

export default Index;
