import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.color.whiteGray};
`;
