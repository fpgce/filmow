import React, {useEffect, useState} from 'react';

import * as H from './styles';

import PlusSourceImage from '~/assets/png/plus.png';

import RateMovieComponent from '~/components/rate/movie';
import ButtonCategory from '~/components/button/category';
import ArtistItem from '~/components/item/artist';

import environments from '~/config/environments';

import {requestMovieDetail} from '~/services/api/movies';
import {getOnlyYear, getFormatedRuntime} from '~/utils/date';

const MovieDetailScreen = ({route}) => {
  const [movie, setMovie] = useState(route?.params?.movie);

  useEffect(() => {
    async function requestDetailOfAMovie() {
      try {
        const movieId = route?.params?.movie?.id;
        const {data} = await requestMovieDetail({id: movieId});
        setMovie((movie) => ({...movie, ...data}));
      } catch (error) {}
    }
    requestDetailOfAMovie();
  }, [route]);

  return (
    <H.ScrollView>
      <H.Container>
        <H.Banner
          source={{
            uri: `${environments.base_image_path}/w500${movie.backdrop_path}`,
          }}
        />
        <H.Content>
          <H.ContainerRate>
            <RateMovieComponent movie={movie} />
          </H.ContainerRate>
          <H.RowHeader>
            <H.View>
              <H.Title>{movie.title}</H.Title>
              <H.Small>{`${getOnlyYear(movie?.release_date)}      ${
                movie.runtime ? getFormatedRuntime(movie.runtime) : ''
              }`}</H.Small>
            </H.View>
            {/* <H.ButtonSquare>
              <H.Plus source={PlusSourceImage} />
            </H.ButtonSquare> */}
          </H.RowHeader>
          <H.RowCategory>
            {movie?.genres?.map((tag) => (
              <ButtonCategory key={tag.id}>{tag.name}</ButtonCategory>
            ))}
          </H.RowCategory>
          <H.Subtitle>Sipnose</H.Subtitle>
          <H.Small>{movie.overview}</H.Small>
        </H.Content>
        <H.HorizontalFlatList
          data={movie.production_companies || []}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item, index}) => <ArtistItem item={item} />}
        />
      </H.Container>
    </H.ScrollView>
  );
};

export default MovieDetailScreen;
