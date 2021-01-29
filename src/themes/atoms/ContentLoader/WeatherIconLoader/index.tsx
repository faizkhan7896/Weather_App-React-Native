import React from 'react';
import { Rect } from 'react-content-loader/native';

import { Container, ContainerLoader } from './styles';
import theme from '../../../theme';

const WeatherIconLoader = (): React.FC => {
  return (
    <Container>
      <ContainerLoader>
        <Rect
          x="0"
          y="0"
          rx="4"
          ry="4"
          width={`${theme.metrics.width * 0.25}`}
          height={`${theme.metrics.height * 0.15}`}
        />
      </ContainerLoader>
    </Container>
  );
};

export default WeatherIconLoader;
