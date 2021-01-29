import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${(props) => props.theme.color[props.color] || props.color};
  font-size: ${(props) => props.theme.fontSize.chapter}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
  text-align: center;
  text-transform: uppercase;
`;
