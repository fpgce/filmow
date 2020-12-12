import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${({theme}) => theme.color.background_loading};
  justify-content: center;
  align-items: center;
`;
