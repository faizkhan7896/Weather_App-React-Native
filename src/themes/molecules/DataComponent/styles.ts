import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.26}px;
  height: ${(props) => props.theme.metrics.height * 0.15}px;
  justify-content: center;
  align-items: center;
`;

export const ContainerMeasurement = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageFast = styled(FastImage).attrs((props) => ({
  source: {
    uri: props.uri,
    priority: FastImage.priority.normal,
  },
  resizeMode: FastImage.resizeMode.cover,
}))`
  width: ${(props) => props.theme.metrics.width * 0.07}px;
  height: ${(props) => props.theme.metrics.width * 0.07}px;
`;
