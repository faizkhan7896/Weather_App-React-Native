import React from 'react';
import { Image } from 'react-native';
import { DataComponentDTO } from '../../../dtos/DataComponentDTO';

import MeasurementLoader from '../../atoms/ContentLoader/MeasurementLoader';
import MediumText from '../../atoms/Texts/MediumText';
import SmallText from '../../atoms/Texts/SmallText';
import { Container, ContainerMeasurement, ImageFast } from './styles';

const DataComponent = ({
  SVG,
  type,
  value,
  measurement = '',
}: DataComponentDTO): React.FC<Props> => {
  const url = Image.resolveAssetSource(SVG).uri;
  return (
    <Container>
      <ImageFast uri={url} />
      <ContainerMeasurement>
        {value ? <MediumText text={value} /> : <MeasurementLoader />}
        <MediumText text={measurement} />
      </ContainerMeasurement>
      <SmallText text={type} />
    </Container>
  );
};

export default DataComponent;
