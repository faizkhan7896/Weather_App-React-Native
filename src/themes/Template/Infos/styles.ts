import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${(props) => props.theme.metrics.height * 0.6}px;
  margin-top: -${(props) => props.theme.metrics.height * 0.1}px;
  width: ${(props) => props.theme.metrics.width}px;
  background-color: ${(props) => props.theme.color.gray400};
  border-top-left-radius: ${(props) => props.theme.metrics.height * 0.05}px;
  border-top-right-radius: ${(props) => props.theme.metrics.height * 0.05}px;
  z-index: 2;
`;
