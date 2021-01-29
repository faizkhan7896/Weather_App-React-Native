import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.35}px;
  height: ${(props) => props.theme.metrics.height * 0.075}px;
  border-top-right-radius: ${(props) => props.theme.metrics.height * 0.05}px;
  border-bottom-left-radius: ${(props) => props.theme.metrics.height * 0.05}px;
  background-color: #9378ff;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContainerText = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.25}px;
  align-items: flex-start;
`;
