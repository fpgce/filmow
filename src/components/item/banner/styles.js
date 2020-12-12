import styled from 'styled-components/native';
import {Montserrat} from '~/components/global/text';

export const ContainerBanner = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: ${({theme}) => theme.window.width * 0.7}px;
  min-height: ${({theme}) => theme.window.height * 0.6}px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: ${({theme}) => theme.window.height * 0.5}px;
  border-radius: 30px;
`;

export const CardInfo = styled.View`
  margin-top: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(20)}px;
  font-weight: bold;
`;

export const Small = styled(Montserrat)`
  height: ${({theme}) => theme.normalize(16)}px;
  color: ${({theme, light}) =>
    light ? theme.color.dark_subtitle : theme.color.dark_light};
`;

export const Star = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const Circle = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-left: 10px;
  background-color: ${({theme}) => theme.color.dark_subtitle};
`;
