import React, {useEffect, useMemo, useCallback} from 'react';

import * as H from './styles';

import {useTheme} from 'styled-components/native';

import SafeArea from '~/components/safe/default';
import SearchIcon from '~/assets/svgIcon/search';
import ConfigIcon from '~/assets/svgIcon/config';

import TopTabNavigator from '~/components/tabs/top';
import BannerComponent from '~/components/item/banner';
import CategoryComponent from '~/components/button/category';
import Carousel from 'react-native-snap-carousel';

import useMovies from '~/context/movies';
import useGenres from '~/context/genres';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  const {genres, toggleActiveGenre} = useGenres();
  const {
    init,
    toggleModal,
    selectedTags,
    toggleTagSelected,
    loading,
    error,
    movies,
  } = useMovies();

  useEffect(() => {
    init();
  }, [init]);

  const handleNavigateToConfig = useCallback(
    () => navigation.navigate('settings'),
    [navigation],
  );

  const renderMovieItem = useCallback(
    ({item: movie}) => (
      <BannerComponent
        key={movie.id}
        movie={movie}
        onPress={() =>
          navigation.navigate('moviedetail', {
            movie: movie,
          })
        }
      />
    ),
    [navigation],
  );

  return (
    <SafeArea>
      <H.Container>
        <H.Row style={{paddingVertical: 10}}>
          <H.Button onPress={handleNavigateToConfig} style={{paddingLeft: 20}}>
            <ConfigIcon size={20} stroke={theme.color.dark_dark} fill="none" />
          </H.Button>
          <H.Button onPress={toggleModal}>
            <SearchIcon size={20} stroke={theme.color.dark_dark} />
          </H.Button>
        </H.Row>
        <TopTabNavigator />
        <H.ScrollContainer>
          <H.HorizontalScroll>
            {genres.map((tag) => (
              <CategoryComponent
                key={tag.id}
                onPress={() => toggleActiveGenre(tag)}
                active={tag.active}>
                {tag.name}
              </CategoryComponent>
            ))}
          </H.HorizontalScroll>
          <Carousel
            data={movies}
            renderItem={renderMovieItem}
            sliderWidth={theme.window.width}
            itemWidth={theme.window.width * 0.7}
          />
        </H.ScrollContainer>
      </H.Container>
    </SafeArea>
  );
};

export default HomeScreen;
