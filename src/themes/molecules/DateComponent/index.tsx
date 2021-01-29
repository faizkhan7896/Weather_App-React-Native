import React, { useEffect, useState } from 'react';
import { formatToDayAndTime } from '../../../utils/DateUtils';
import MeasurementLoader from '../../atoms/ContentLoader/MeasurementLoader';
import LocalText from '../../atoms/Texts/LocalText';
import SmallText from '../../atoms/Texts/SmallText';
import { Container } from './styles';

interface Props {
  fullDate: string;
}

const DateComponent = ({ fullDate }: Props): React.FC => {
  const [dateFormatted, setDateFormatted] = useState('');
  useEffect(() => {
    if (fullDate) {
      const formatted = formatToDayAndTime(fullDate);
      setDateFormatted(formatted);
    }
  }, [fullDate]);
  return (
    <Container>
      {dateFormatted ? (
        <LocalText text={dateFormatted} />
      ) : (
        <MeasurementLoader />
      )}
    </Container>
  );
};

export default DateComponent;
