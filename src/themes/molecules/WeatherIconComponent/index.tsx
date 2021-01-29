import React from 'react';
import WeatherIconLoader from '../../atoms/ContentLoader/WeatherIconLoader';
import MediumText from '../../atoms/Texts/MediumText';
import { Container, Image } from './styles';

interface Props {
  icon: string;
  weatherName: string;
}

const WeatherIconComponent = ({
  icon,
  weatherName,
}: Props): React.FC<Props> => {
  return (
    <Container>
      {icon && weatherName ? (
        <>
          <Image uri={`http://openweathermap.org/img/wn/${icon}.png`} />
          <MediumText text="thunderstorm" />
        </>
      ) : (
        <WeatherIconLoader />
      )}
    </Container>
  );
};

export default WeatherIconComponent;
