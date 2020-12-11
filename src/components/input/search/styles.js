import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled.View`
  width: 100%;
  min-height: 80px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity``;

export const Input = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.color.dark_subtitle,
}))`
  width: 100%;
  background-color: ${({theme}) => theme.color.light_light};
  color: ${({theme}) => theme.color.dark_subtitle};
  height: 50px;
  padding-left: 60px;
  padding-right: 35px;
  font-family: 'Montserrat';
  font-size: ${({theme}) => theme.normalize(14)}px;
`;

export const AbsoluteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0,
})`
  position: absolute;
  padding: 10px;
  z-index: 100;
`;
