import styled from 'styled-components/native';
import {Montserrat} from '~/components/global/text';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: ${({theme}) => theme.normalize(25)}px;
  justify-content: center;
  align-items: center;
  border: solid 1px #000;
  border-radius: 100px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: ${({theme}) => theme.normalize(10)}px;
  margin-left: ${({theme, first}) => (first ? theme.normalize(20) : 0)}px;
  background-color: ${({theme}) => theme.color.light_light};
`;

export const Text = styled(Montserrat)`
  height: ${({theme}) => theme.normalize(16)}px;
  color: ${({theme, light}) =>
    light ? theme.color.dark_subtitle : theme.color.dark_light};
`;
