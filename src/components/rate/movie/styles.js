import styled from 'styled-components/native';
import {Montserrat} from '~/components/global/text';

export const Container = styled.View`
  width: ${({theme}) => theme.window.width * 0.5}px;
  background-color: ${({theme}) => theme.color.light_light};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  padding: 20px 0px;
`;

export const Star = styled.Image`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;

export const View = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  align-items: center;
`;

export const Small = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(8)}px;
  font-weight: 600;
`;
