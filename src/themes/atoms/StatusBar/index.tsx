import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';

const StatusBarCustom = (): React.FC => {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0)"
        barStyle="dark-content"
      />
    </Container>
  );
};

export default StatusBarCustom;
