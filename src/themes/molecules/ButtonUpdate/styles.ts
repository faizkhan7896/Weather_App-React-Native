import styled from 'styled-components/native';
import Att from '../../../assets/icons/att.svg';

export const Container = styled.View`
  width: ${(props) => props.theme.metrics.width * 0.3}px;
  height: ${(props) => props.theme.metrics.height * 0.15}px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Att).attrs((props) => ({
  width: props.theme.metrics.height * 0.07,
  height: props.theme.metrics.height * 0.07,
}))``;
