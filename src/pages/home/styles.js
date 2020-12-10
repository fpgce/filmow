import styled from 'styled-components/native';

import {Montserrat} from '~/components/global/text';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerBanner = styled.View`
  width: ${({theme}) => theme.window.width * 0.7}px;
  height: ${({theme}) => theme.window.height * 0.5}px;
  margin: 30px;
`;

export const CardInfo = styled.View`
  margin-top: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export const Text = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(20)}px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  margin-right: ${({theme}) => theme.normalize(20)}px;
  margin-left: ${({theme, first}) => (first ? theme.normalize(20) : 0)}px;
`;

export const BottonLine = styled.View`
  width: ${({theme}) => theme.normalize(40)}px;
  margin-top: ${({theme}) => theme.normalize(10)}px;
  height: ${({theme}) => theme.normalize(4)}px;
  background-color: ${({theme}) => theme.color.primary_main};
`;

export const HorizontalScroll = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  max-height: ${({theme}) => theme.normalize(60)}px;
`;

export const ScrollBanners = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const ButtonCategory = styled.TouchableOpacity.attrs({
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
`;

export const Small = styled(Montserrat)`
  height: ${({theme}) => theme.normalize(16)}px;
  color: ${({theme, light}) =>
    light ? theme.color.dark_subtitle : theme.color.dark_light};
`;

export const Circle = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.color.dark_subtitle};
`;

export const Star = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;
