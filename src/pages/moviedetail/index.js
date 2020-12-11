import React, {useEffect, useState} from 'react';

import * as H from './styles';

import PlusSourceImage from '~/assets/png/plus.png';

import RateMovieComponent from '~/components/rate/movie';
import ButtonCategory from '~/components/button/category';
import ArtistItem from '~/components/item/artist';

const MovieDetailScreen = () => {
  return (
    <H.Container>
      <H.Banner
        source={{
          uri:
            'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
        }}
      />
      <H.Content>
        <H.ContainerRate>
          <RateMovieComponent />
        </H.ContainerRate>
        <H.RowHeader>
          <H.View>
            <H.Title>Power</H.Title>
            <H.Small>{`2020      1h53m`}</H.Small>
          </H.View>
          <H.ButtonSquare>
            <H.Plus source={PlusSourceImage} />
          </H.ButtonSquare>
        </H.RowHeader>
        <H.RowCategory>
          <ButtonCategory>Ação</ButtonCategory>
          <ButtonCategory>Crime</ButtonCategory>
          <ButtonCategory>Ficção Científica</ButtonCategory>
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
