import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.65}px;
  height: ${(props) => props.theme.metrics.height * 0.075}px;
  align-items: center;
  justify-content: center;
`;
