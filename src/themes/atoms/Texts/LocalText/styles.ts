import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${(props) => props.theme.fontSize.regular}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
  color: ${(props) => props.theme.color.gray700};
  text-align: center;
`;
