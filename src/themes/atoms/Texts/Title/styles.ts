import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${(props) =>
    props.theme.fontSize[props.fontSize] || props.theme.fontSize.regular}px;
  color: ${(props) =>
    props.theme.color[props.color] || props.color || props.theme.color.navy};
  text-align: center;
  text-transform: uppercase;
`;
