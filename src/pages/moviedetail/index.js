import React, {useEffect, useState} from 'react';

import * as H from './styles';

import PlusSourceImage from '~/assets/png/plus.png';

import RateMovieComponent from '~/components/rate/movie';
import ButtonCategory from '~/components/button/category';
import ArtistItem from '~/components/item/artist';

import environments from '~/config/environments';

import useMovies from '~/context/movies';

const MovieDetailScreen = ({route}) => {
  const movie = route?.params?.movie;
  const {selectedTags} = useMovies();

  return (
    <H.Container>
      <H.Banner
        source={{
          uri: `${environments.base_image_path}/w500${movie.poster_path}`,
        }}
      />
      <H.Content>
        <H.ContainerRate>
          <RateMovieComponent />
        </H.ContainerRate>
        <H.RowHeader>
          <H.View>
            <H.Title>{movie.title}</H.Title>
            <H.Small>{`2020      1h53m`}</H.Small>
          </H.View>
          <H.ButtonSquare>
            <H.Plus source={PlusSourceImage} />
          </H.ButtonSquare>
        </H.RowHeader>
        <H.RowCategory>
          {selectedTags.map((tag) => (
            <ButtonCategory key={tag}>{tag}</ButtonCategory>
          ))}
        </H.RowCategory>
        <H.Subtitle>Sipnose</H.Subtitle>
        <H.Small>
          Um ex-soldado, uma adolescente e um policial varrem New Orleans em
          busca de uma pílula perigosa que desperta superpoderes temporários.
        </H.Small>
      </H.Content>
      <H.HorizontalScroll horizontal>
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
      </H.HorizontalScroll>
    </H.Container>
  );
};

export default MovieDetailScreen;
