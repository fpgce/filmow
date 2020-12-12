import React from 'react';
import {View, Image, Text} from 'react-native';

import * as A from './styles';

import env from '~/config/environments';
import PropTypes from 'prop-types';

const ArtiscItemComponent = ({item}) => {
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

ArtiscItemComponent.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    origin_country: PropTypes.string,
    logo_path: PropTypes.string,
  }).isRequired,
};

export default ArtiscItemComponent;
