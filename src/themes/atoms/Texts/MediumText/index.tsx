import React from 'react';
import { Text } from './styles';

interface Props {
  text: string;
  capitalize: boolean;
}

const MediumText = ({ text, capitalize = true }: Props): React.FC => {
  return <Text capitalize={capitalize}>{text}</Text>;
};

export default MediumText;
