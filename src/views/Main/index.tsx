import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';

import MainController from '../../controllers/MainController';
import { LocationContext } from '../../hooks/location/useLocation';

import { useSWR } from '../../hooks/swr/useSwr';
import ContainerView from '../../themes/molecules/ContainerView';
import BackgroundImage from '../../themes/Template/BackgroundImage';
import Infos from '../../themes/Template/Infos';

const Index = (): React.FC => {
  const { location, requestLocation } = useContext(LocationContext);

  const { data, revalidate } = useSWR(location);
  console.log('DATA', data?.dt);

  useEffect(() => {
    if (data) {
      MainController(data);
    }
  }, [data]);

  return (
    <ContainerView>
      <BackgroundImage iconName={data?.weather[0].icon} />
      <Infos
        data={data}
        requestLocation={() => {
          requestLocation();
          revalidate();
        }}
      />
    </ContainerView>
  );
};

export default Index;
