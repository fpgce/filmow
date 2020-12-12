import React, {memo} from 'react';

import * as B from './styles';
import environments from '~/config/environments';

import StarSourceImage from '~/assets/png/star.png';
import NoImageJpg from '~/assets/png/no_movie.jpg';

import {getOnlyYear} from '~/utils/date';
import PropTypes from 'prop-types';

const BannerItemComponent = ({movie, onPress}) => {
  return (
    <B.ContainerBanner onPress={() => onPress(movie)}>
      <B.BannerImage
        defaultSource={NoImageJpg}
        source={{
          uri: `${environments.base_image_path}/w500${movie.poster_path}`,
        }}
      />
      <B.CardInfo>
        <B.Row>
          <B.Text style={{maxWidth: '75%'}}>{movie.title}</B.Text>
          <B.Row>
            <B.Star source={StarSourceImage} />
            <B.Small>{movie.vote_average}/10</B.Small>
          </B.Row>
        </B.Row>
        <B.Row style={{marginTop: 10}}>
          <B.Small light>{getOnlyYear(movie.release_date)}</B.Small>
          {/* <B.Circle /> */}
          {/* <B.Small light>Ação - Crime - Ficção científica</B.Small> */}
        </B.Row>
      </B.CardInfo>
    </B.ContainerBanner>
  );
};

BannerItemComponent.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default memo(BannerItemComponent);
