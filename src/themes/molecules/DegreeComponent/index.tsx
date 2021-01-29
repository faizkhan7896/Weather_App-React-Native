import React from 'react';
import TextLoad from '../../atoms/ContentLoader/NumberLoader';
import MaxText from '../../atoms/Texts/MaxText';
import SmallText from '../../atoms/Texts/SmallText';
import { Container, ContainerDegree } from './styles';

interface Props {
  degree: number;
}

const DegreeComponent = ({ degree }: Props): React.FC<Props> => {
  return (
    <Container>
      {degree ? <MaxText text={degree} /> : <TextLoad />}
      <ContainerDegree>
        <SmallText text="&#8451;" />
      </ContainerDegree>
    </Container>
  );
};

export default DegreeComponent;
