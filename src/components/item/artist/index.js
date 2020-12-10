import React from 'react';
import {View, Image, Text} from 'react-native';

const ArtiscItemComponent = () => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        style={{width: 80, height: 80, borderRadius: 80}}
        source={{
          uri:
            'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
        }}
      />
      <Text>Jamie Foxx</Text>
      <Text>Art</Text>
    </View>
  );
};

export default ArtiscItemComponent;
