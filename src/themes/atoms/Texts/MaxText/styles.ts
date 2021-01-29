import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${(props) => props.theme.fontSize.max}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  text-align: center;
`;
