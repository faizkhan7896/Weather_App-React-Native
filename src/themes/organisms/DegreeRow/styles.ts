import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${(props) => props.theme.metrics.height * 0.18}px;
  width: ${(props) => props.theme.metrics.width}px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
