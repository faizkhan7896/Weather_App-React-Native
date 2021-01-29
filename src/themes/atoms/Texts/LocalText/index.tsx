import React from 'react';
import { Text } from './styles';

interface Props {
  text: string;
}

const LocalText = ({ text }: Props): React.FC => {
  return <Text>{text}</Text>;
};

export default LocalText;
