import styled from 'styled-components/native';
import {Montserrat} from '~/components/global/text/index';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  background-color: ${({theme}) => theme.color.light_light};
  flex-direction: row;
  padding: 10px;
  margin-bottom: 20px;
`;

export const View = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Thumb = styled.Image`
  width: 70px;
  height: 70px;
  background-color: gray;
  margin-right: 20px;
`;

export const Title = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(12)}px;
  font-weight: 600;
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
  margin-right: 10px;
  margin-left: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
