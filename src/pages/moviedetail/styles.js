import styled from 'styled-components/native';
import {Montserrat} from '~/components/global/text';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.light_light};
`;

export const Content = styled.View`
  margin-top: -70px;
  padding: 20px;
`;

export const RowCategory = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const RowHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const View = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const HorizontalScroll = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
})`
  max-height: ${({theme}) => theme.normalize(100)}px;
  margin-top: 20px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: ${({theme}) => theme.window.height * 0.4}px;
  border-bottom-left-radius: 50px;
`;

export const ContainerRate = styled.View`
  align-items: flex-end;
  margin-right: -20px;
  margin-bottom: 50px;
`;

export const Title = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(20)}px;
  font-weight: 700;
`;

export const Subtitle = styled(Montserrat)`
  font-weight: 600;
  font-size: ${({theme}) => theme.normalize(15)}px;
  margin-bottom: 10px;
`;

export const Small = styled(Montserrat)`
  font-weight: 200;
  font-size: ${({theme}) => theme.normalize(10)}px;
  line-height: 18px;
`;

export const ButtonSquare = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.primary_light};
  border-radius: 10px;
`;

export const Plus = styled.Image`
  width: 25px;
  height: 25px;
`;
