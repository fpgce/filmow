import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: ${({theme}) => theme.normalize(50)}px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
`;
