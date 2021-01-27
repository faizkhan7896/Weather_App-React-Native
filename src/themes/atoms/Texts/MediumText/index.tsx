import React from 'react';
import { Text } from './styles';

interface Props {
  text: string;
}

const MediumText = ({ text }: Props): React.FC => {
  return <Text>{text}</Text>;
};

export default MediumText;
