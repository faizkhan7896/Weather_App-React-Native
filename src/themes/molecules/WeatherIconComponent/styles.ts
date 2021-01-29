import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.3}px;
  height: ${(props) => props.theme.metrics.height * 0.15}px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(FastImage).attrs((props) => ({
  source: {
    uri: props.uri,
    priority: FastImage.priority.normal,
  },
  resizeMode: FastImage.resizeMode.cover,
}))`
  width: ${(props) => props.theme.metrics.width * 0.18}px;
  height: ${(props) => props.theme.metrics.height * 0.11}px;
`;
