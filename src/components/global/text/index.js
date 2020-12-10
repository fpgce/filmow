import styled from 'styled-components/native';

const Text = styled.Text`
  color: ${({theme}) => theme.color.dark_light};
`;

export const Montserrat = styled(Text)`
  font-family: 'Montserrat';
`;
