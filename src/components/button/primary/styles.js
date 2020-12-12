import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {Montserrat} from '~/components/global/text';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: ${({theme}) => theme.window.width * 0.8}px;
  height: ${({theme}) => theme.normalize(40)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.primary_dark};
  border-radius: 5px;
`;

export const Text = styled(Montserrat)`
  color: ${({theme}) => theme.color.light_light};
  font-size: ${({theme}) => theme.normalize(12)}px;
  font-weight: 500;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: Platform.OS === 'ios' ? 1 : 20,
  color: '#fff',
})``;
