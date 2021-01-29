import React from 'react';
import Local from '../../../assets/icons/place.svg';
import MeasurementLoader from '../../atoms/ContentLoader/MeasurementLoader';
import SmallText from '../../atoms/Texts/SmallText';
import { Container, ContainerText } from './styles';

interface Props {
  local: string;
}

const LocalComponent = ({ local }: Props): React.FC => {
  return (
    <Container>
      <Local />
      <ContainerText>
        {local ? <SmallText text={local} /> : <MeasurementLoader />}
      </ContainerText>
    </Container>
  );
};

export default LocalComponent;
