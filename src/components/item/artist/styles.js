import styled from 'styled-components/native';
import {Montserrat} from '~/components/global/text/index';

export const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

export const Thumb = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  margin-bottom: 10px;
  background-color: gray;
`;

export const Title = styled(Montserrat)`
  font-weight: 600;
  font-size: ${({theme}) => theme.normalize(12)}px;
`;

export const Small = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(10)}px;
  color: ${({theme}) => theme.color.dark_subtitle};
  font-weight: 400;
  margin-top: 8px;
`;
