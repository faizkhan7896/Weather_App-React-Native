import React from 'react';
import { Image } from 'react-native';
import DayCloud from '../../../assets/images/day-cloud.png';
import { Container, ImageFast } from './styles';
import Business from './business';

interface Props {
  iconName: string;
}

const BackgroundImage = ({ iconName }: Props): React.FC => {
  const result = Business(iconName);
  return (
    <Container>
      <ImageFast uri={result} />
    </Container>
  );
};

export default BackgroundImage;
