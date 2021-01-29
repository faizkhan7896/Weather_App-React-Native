import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  height: ${(props) => props.theme.metrics.height * 0.5}px;
  width: ${(props) => props.theme.metrics.width}px;
  margin-top: -${(props) => props.theme.metrics.PaddingStatus}px;
  z-index: 1;
`;

export const ImageFast = styled(FastImage).attrs((props) => ({
  source: {
    uri: props.uri,
    priority: FastImage.priority.normal,
  },
  resizeMode: FastImage.resizeMode.cover,
}))`
  height: ${(props) => props.theme.metrics.height * 0.5}px;
  width: ${(props) => props.theme.metrics.width}px;
`;
