import React from 'react';
import ButtonUpdate from '../../molecules/ButtonUpdate';
import DegreeComponent from '../../molecules/DegreeComponent';
import WeatherIconComponent from '../../molecules/WeatherIconComponent';
import { Container } from './styles';

interface Props {
  icon: string;
  weather: string;
  degree: string;
  requestLocation: () => void;
}

const DegreeRow = ({
  degree,
  icon,
  weather,
  requestLocation,
}: Props): React.FC => {
  return (
    <Container>
      <WeatherIconComponent icon={icon} weatherName={weather} />
      <DegreeComponent degree={degree} />
      <ButtonUpdate onPress={requestLocation} />
    </Container>
  );
};

export default DegreeRow;
