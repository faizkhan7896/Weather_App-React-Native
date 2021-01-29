import ContentLoader, { Rect } from 'react-content-loader/native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.1}px;
  height: ${(props) => props.theme.metrics.height * 0.05}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerLoader = styled(ContentLoader).attrs((props) => ({
  viewBox: `0 0 ${props.theme.metrics.width * 0.1} ${
    props.theme.metrics.height * 0.05
  }`,
  backgroundColor: props.theme.color.gray400,
}))``;

export const RectLoader = styled(Rect).attrs((props) => ({
  x: '0',
  y: '0',
  rx: '4',
  ry: '4',
  width: '50',
  height: '50',
}));
