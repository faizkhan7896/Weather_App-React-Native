import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { Container, ContainerLoader } from './styles';
import theme from '../../../theme';

const NumberLoad = (): React.FC => {
  return (
    <Container>
      <ContainerLoader>
        <Rect
          x="0"
          y="0"
          rx="4"
          ry="4"
          width={`${theme.metrics.width * 0.1}`}
          height={`${theme.metrics.height * 0.05}`}
        />
      </ContainerLoader>
    </Container>
  );
};

export default NumberLoad;
