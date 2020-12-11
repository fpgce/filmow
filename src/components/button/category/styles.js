import styled from 'styled-components/native';
import {Montserrat} from '~/components/global/text';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: ${({theme}) => theme.normalize(25)}px;
  justify-content: center;
  align-items: center;
  border: solid 1px ${({theme}) => theme.color.dark_main};
  border-radius: 100px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: ${({theme}) => theme.normalize(10)}px;
  background-color: ${({theme, active}) =>
    active ? theme.color.dark_dark : theme.color.light_light};
`;

export const Text = styled(Montserrat)`
  height: ${({theme}) => theme.normalize(16)}px;
  color: ${({theme, active}) =>
    active ? theme.color.light_light : theme.color.dark_light};
`;
