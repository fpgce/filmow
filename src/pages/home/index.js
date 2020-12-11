import React, {useEffect, useState, useCallback} from 'react';

import * as H from './styles';

import {useTheme} from 'styled-components/native';

import StarSourceImage from '~/assets/png/star.png';
import SafeArea from '~/components/safe/default';

import CategoryComponent from '~/components/button/category';
import {requestPageOfMovies} from '~/services/api/movies';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
  const theme = useTheme();

  const [state, setState] = useState({
    page: 1,
    loading: true,
    movies: [],
  });

  useEffect(() => {
    async function init() {
      try {
        const {data} = await requestPageOfMovies({page: 1});
        setState((s) => ({...s, movies: data.results}));
      } catch (error) {}
    }
    init();
  }, []);

  const renderMovieItem = useCallback(
    ({item: movie, index}) => (
      <H.ContainerBanner key={movie.id}>
        <H.BannerImage
          source={{
            uri: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
        <H.CardInfo>
          <H.Row>
            <H.Text style={{maxWidth: '75%'}}>{movie.title}</H.Text>
            <H.Row>
              <H.Star source={StarSourceImage} />
              <H.Small>{movie.vote_average}/10</H.Small>
            </H.Row>
          </H.Row>
          <H.Row style={{marginTop: 10}}>
            <H.Small light>1h 53m</H.Small>
            <H.Circle />
            <H.Small light>Ação - Crime - Ficção científica</H.Small>
          </H.Row>
        </H.CardInfo>
      </H.ContainerBanner>
    ),
    [],
  );

  return (
    <SafeArea>
      <H.Container>
        <H.HorizontalScroll horizontal>
          <H.Button>
            <H.Text>Populares</H.Text>
            <H.BottonLine />
          </H.Button>
          <H.Button>
            <H.Text>Em cartaz</H.Text>
            <H.BottonLine />
          </H.Button>
          <H.Button>
            <H.Text>Minha lista</H.Text>
            <H.BottonLine />
          </H.Button>
        </H.HorizontalScroll>
        <H.HorizontalScroll horizontal>
          <CategoryComponent active>Ação</CategoryComponent>
          <CategoryComponent>Comédia</CategoryComponent>
          <CategoryComponent>Drama</CategoryComponent>
        </H.HorizontalScroll>
        <Carousel
          data={state?.movies}
          renderItem={renderMovieItem}
          sliderWidth={theme.window.width}
          itemWidth={theme.window.width * 0.7}
        />
        <H.ScrollBanners horizontal></H.ScrollBanners>
      </H.Container>
    </SafeArea>
  );
};

export default HomeScreen;
