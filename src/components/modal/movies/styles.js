import styled from 'styled-components/native';
import {Modal} from 'react-native';
import {Montserrat} from '~/components/global/text/index';

export const ModalContainer = styled(Modal)`
  padding: 0px;
  margin: 0px;
  background-color: ${({theme}) => theme.color.light_light};
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Text = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(14)}px;
  color: ${({theme}) => theme.color.dark_main};
  margin-bottom: 20px;
`;
