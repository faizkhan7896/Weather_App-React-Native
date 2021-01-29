import React from 'react';
import StatusBarCustom from '../../atoms/StatusBar';
import { Container } from './styles';

const ContainerView = ({ children }: React.FC): React.FC => {
  return (
    <Container>
      <StatusBarCustom translucent backgroundColor="rgba(0,0,0,0)" />
      {children}
    </Container>
  );
};

export default ContainerView;
