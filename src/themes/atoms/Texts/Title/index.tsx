import React from 'react';
import { Text } from './styles';

interface Props {
  text: string;
  color: string;
}

const Title: React.FC<Props> = ({ text, color = 'black' }: Props) => {
  return <Text color={color}>{text}</Text>;
};
export default Title;
