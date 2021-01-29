import ContentLoader, { Rect } from 'react-content-loader/native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.12}px;
  height: ${(props) => props.theme.fontSize.medium}px;
  justify-content: center;
  align-items: center;
`;

export const ContainerLoader = styled(ContentLoader).attrs((props) => ({
  viewBox: `0 0 ${props.theme.metrics.width * 0.12} ${
    props.theme.fontSize.medium
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
