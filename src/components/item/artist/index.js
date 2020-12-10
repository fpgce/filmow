import React from 'react';
import {View, Image, Text} from 'react-native';

import * as A from './styles';

const ArtiscItemComponent = () => {
  return (
    <A.Container>
      <A.Thumb
        source={{
          uri:
            'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
        }}
      />
      <A.Title>Jamie Foxx</A.Title>
      <A.Small>Art</A.Small>
    </A.Container>
  );
};

export default ArtiscItemComponent;
