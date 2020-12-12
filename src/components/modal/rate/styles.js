import styled from 'styled-components/native';
import SafeArea from '~/components/safe/default';
import {Modal} from 'react-native';
import {Montserrat} from '~/components/global/text/index';

export const ModalContainer = styled(Modal)`
  padding: 0px;
  margin: 0px;
`;

export const FullButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #0005;
  justify-content: flex-end;
`;

export const Safe = styled(SafeArea)`
  background-color: transparent;
  justify-content: flex-end;
`;

export const FooterBox = styled.View`
  align-items: center;
  padding: 20px;
  background-color: ${({theme}) => theme.color.footer_modal_rate_background};
  min-height: ${({theme}) => theme.window.height * 0.3}px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Title = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(15)}px;
  color: ${({theme}) => theme.color.dark_main};
  font-weight: 600;
  padding: 5px;
  padding-bottom: 10px;
`;

export const Subtitle = styled(Title)`
  font-size: ${({theme}) => theme.normalize(10)}px;
  font-weight: 400;
`;

export const CloseBar = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
  hitSlop: {
    top: 5,
    bottom: 5,
  },
})`
  width: 60%;
  margin-bottom: 15px;
  height: 5px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.color.footer_modal_bar_background};
`;
