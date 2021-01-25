import React from 'react';
import { StyleSheetProperties } from 'react-native';
import { Text } from './styles';

interface Props {
  fontFamily: 'regular' | 'bold' | 'black' | 'medium';
  fontSize: 'small' | 'regular' | 'middle' | 'medium';
  color: string;
  text: string;
  style: StyleSheetProperties;
}

const Title: React.FC<Props> = ({
  style,
  text,
  color,
  fontFamily,
  fontSize,
}: Props) => {
  return (
    <Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      style={style}>
      {text}
    </Text>
  );
};
export default Title;
