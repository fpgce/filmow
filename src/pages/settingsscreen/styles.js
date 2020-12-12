import styled from 'styled-components/native';

import {Montserrat} from '~/components/global/text';

export const Container = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;

export const Title = styled(Montserrat)`
  font-size: ${({theme}) => theme.normalize(20)}px;
  font-weight: 700;
  padding: 20px;
`;
