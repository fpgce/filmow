import styled from 'styled-components/native';
import {Montserrat} from '~/components/global/text';

export const HorizontalFlatList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingRight: 30,
  },
})`
  max-height: ${({theme}) => theme.normalize(60)}px;
`;

export const HorizontalScroll = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
})`
  max-height: ${({theme}) => theme.normalize(60)}px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  margin-right: ${({theme}) => theme.normalize(20)}px;
  margin-left: ${({theme, first}) => (first ? theme.normalize(20) : 0)}px;
`;

export const Text = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(20)}px;
  font-weight: bold;
`;

export const BottonLine = styled.View`
  width: ${({theme}) => theme.normalize(40)}px;
  margin-top: ${({theme}) => theme.normalize(10)}px;
  height: ${({theme}) => theme.normalize(4)}px;
  background-color: ${({theme, active}) =>
    active ? theme.color.primary_main : 'transparent'};
`;
