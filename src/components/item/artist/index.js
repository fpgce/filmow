import React from 'react';
import {View, Image, Text} from 'react-native';

import * as A from './styles';

import env from '~/config/environments';

const ArtiscItemComponent = ({item}) => {
  console.log(item);
  return (
    <A.Container>
      <A.Thumb
        source={{
          uri: `${env.base_image_path}/w200${item.logo_path}`,
        }}
      />
      <A.Title>{item.name}</A.Title>
      <A.Small>{item.origin_country}</A.Small>
    </A.Container>
  );
};

export default ArtiscItemComponent;
