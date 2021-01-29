import React, { useContext, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';

import MainController from '../../controllers/MainController';
import { LocationContext } from '../../hooks/location/useLocation';

import MaxText from '../../themes/atoms/Texts/MaxText';
import MediumText from '../../themes/atoms/Texts/MediumText';
import SmallText from '../../themes/atoms/Texts/SmallText';
import Title from '../../themes/atoms/Texts/Title';
import DegreeComponent from '../../themes/molecules/DegreeComponent';
import WeatherIconComponent from '../../themes/molecules/WeatherIconComponent';

import DataGrid from '../../themes/organisms/DataGrid';
import { useSWR } from '../../hooks/swr/useSwr';
import DegreeRow from '../../themes/organisms/DegreeRow';

const Index = (): React.FC => {
  const { location, requestLocation } = useContext(LocationContext);

  const { data, isError, isLoading } = useSWR(location);
  console.log('DATA', data?.coord.lat);

  useEffect(() => {
    if (data) {
      MainController(data);
    }
  }, [data]);

  return (
    <View style={{ backgroundColor: '#ccc', flex: 1 }}>
      <DegreeRow
        degree={data?.main.temp}
        icon={data?.weather[0].icon}
        weather={data?.weather[0].description}
        requestLocation={requestLocation}
      />
      <DataGrid fetchCurrent={data} />
    </View>
  );
};

export default Index;
