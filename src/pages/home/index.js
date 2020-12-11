import React, {useEffect, useMemo, useCallback} from 'react';

import * as H from './styles';

import {useTheme} from 'styled-components/native';

import SafeArea from '~/components/safe/default';
import SearchIcon from '~/assets/svgIcon/search';

import TopTabNavigator from '~/components/tabs/top';
import BannerComponent from '~/components/item/banner';
import CategoryComponent from '~/components/button/category';
import Carousel from 'react-native-snap-carousel';

import useMovies from '~/context/movies';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  const {
    init,
    toggleModal,
    requestMovies,
    tags,
    selectedTags,
    toggleTagSelected,
    loading,
    error,
    movies,
  } = useMovies();

  useEffect(() => {
    init();
  }, [init]);

  const renderMovieItem = useCallback(
    ({item: movie}) => (
      <BannerComponent
        key={movie.id}
        {...{
          movie,
          onPress: () =>
            navigation.navigate('moviedetail', {
              movie: {...movie, tags: selectedTags},
            }),
        }}
      />
    ),
    [navigation, selectedTags],
  );

  return (
    <SafeArea>
      <H.Container>
        <H.Button onPress={toggleModal} style={{alignSelf: 'flex-end'}}>
          <SearchIcon size={20} stroke={theme.color.dark_dark} />
        </H.Button>
        <TopTabNavigator />
        <H.ContainerTags>
          {tags.map((tag) => (
            <CategoryComponent
              key={tag}
              onPress={() => toggleTagSelected(tag)}
              active={selectedTags.includes(tag)}>
              {tag}
            </CategoryComponent>
          ))}
        </H.ContainerTags>
        <Carousel
          data={movies}
          renderItem={renderMovieItem}
          sliderWidth={theme.window.width}
          itemWidth={theme.window.width * 0.7}
        />
      </H.Container>
    </SafeArea>
  );
};

export default HomeScreen;
