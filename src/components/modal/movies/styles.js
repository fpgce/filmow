import styled from 'styled-components/native';
import {Modal} from 'react-native';
import {Montserrat} from '~/components/global/text/index';

export const ModalContainer = styled(Modal)`
  padding: 0px;
  margin: 0px;
  background-color: ${({theme}) => theme.color.light_light};
`;

export const Container = styled.View`
  padding: 0px 20px;
`;

export const Text = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(14)}px;
  color: ${({theme}) => theme.color.dark_main};
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`;

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 20,
    paddingBottom: 100,
  },
})``;
