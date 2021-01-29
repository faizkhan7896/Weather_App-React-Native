import React from 'react';
import DateComponent from '../../molecules/DateComponent';
import LocalComponent from '../../molecules/LocalComponent';
import { Container } from './styles';

interface Props {
  fullDate: string;
  local: string;
}

const LocalDataRow = ({ fullDate, local }: Props): React.FC => {
  return (
    <Container>
      <DateComponent fullDate={fullDate} />
      <LocalComponent local={local} />
    </Container>
  );
};

export default LocalDataRow;
