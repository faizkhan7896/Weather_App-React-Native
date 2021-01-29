import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import MainController from '../../controllers/MainController';
import { LocationContext } from '../../hooks/location/useLocation';

import MaxText from '../../themes/atoms/Texts/MaxText';
import MediumText from '../../themes/atoms/Texts/MediumText';
import SmallText from '../../themes/atoms/Texts/SmallText';
import Title from '../../themes/atoms/Texts/Title';
import DataComponent from '../../themes/molecules/DataComponent';
import DegreeComponent from '../../themes/molecules/DegreeComponent';
import WeatherIconComponent from '../../themes/molecules/WeatherIconComponent';

import Barometer from '../../assets/icons/barometer.svg';
import DataGrid from '../../themes/organisms/DataGrid';
import { useSWR } from '../../hooks/swr/useSwr';

const Index = (): React.FC => {
  const { location, requestLocation } = useContext(LocationContext);

  const { data, isError, isLoading } = useSWR(location);

  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location;
      console.log(`Latiude: ${latitude}; Longitude: ${longitude}`);
    }
  }, [location]);

  useEffect(() => {
    if (data) {
      MainController(data);
    }
  }, [data]);

  return (
    <View style={{ backgroundColor: '#ccc', flex: 1 }}>
      <TouchableOpacity onPress={() => requestLocation()}>
        <WeatherIconComponent />
        <DegreeComponent degree={data?.main.temp} />
        <MaxText text="29" />
        <Title text="29" />
        <SmallText text="&#8451;" />
        <MediumText text="CRICA NEU" />
        <SmallText text="Pressure" />
      </TouchableOpacity>

      <DataGrid fetchCurrent={data} />
    </View>
  );
};

export default Index;
