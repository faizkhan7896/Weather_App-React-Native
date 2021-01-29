import React from 'react';
import { Text } from './styles';

interface Props {
  text: string;
}

const SmallText = ({ text }: Props): React.FC => {
  return <Text>{text}</Text>;
};

export default SmallText;
