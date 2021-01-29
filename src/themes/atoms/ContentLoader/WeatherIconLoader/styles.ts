import ContentLoader, { Rect } from 'react-content-loader/native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.25}px;
  height: ${(props) => props.theme.metrics.height * 0.15}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerLoader = styled(ContentLoader).attrs((props) => ({
  viewBox: `0 0 ${props.theme.metrics.width * 0.25} ${
    props.theme.metrics.height * 0.15
  }`,
  backgroundColor: props.theme.color.gray400,
}))``;
