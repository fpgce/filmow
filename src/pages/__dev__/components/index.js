import React, {useEffect, useMemo, useCallback} from 'react';

import * as H from './styles';

import SafeArea from '~/components/safe/default';

import InputSearchComponent from '~/components/input/search';

import CategoryComponent from '~/components/button/category';
import PrimaryButton from '~/components/button/primary';

import ItemArtistComponent from '~/components/item/artist';
import ItemBannerComponent from '~/components/item/banner';
import ItemMovieSmallComponent from '~/components/item/moviesmall';

import RateMovieComponent from '~/components/rate/movie';

import TabsComponent from '~/components/tabs/top';

import useTheme from '~/context/theme';

const movie = {
  id: 123,
  logo_path: '/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg',
  poster_path: '/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg',
  title: 'A volta dos que não foram',
  name: 'A volta dos que não foram',
  origin_country: 'Brazil',
  release_date: '2020-12-12',
  vote_average: 9.5,
};

const onPress = () => {};

const SettingsScreen = ({navigation}) => {
  return (
    <SafeArea>
      <H.Container>
        <H.Row>
          <TabsComponent movie={movie} onPress={onPress} />
        </H.Row>
        <H.Row>
          <CategoryComponent onPress={() => navigation.navigate('home')}>
            Envar no app
          </CategoryComponent>
        </H.Row>
        <H.Row>
          <PrimaryButton>avaliar</PrimaryButton>
        </H.Row>
        <H.Row>
          <PrimaryButton loading>avaliar</PrimaryButton>
        </H.Row>
        <H.Row>
          <PrimaryButton success>avaliar</PrimaryButton>
        </H.Row>
        <H.Row>
          <InputSearchComponent focused={false} callbackSearch={() => {}} />
        </H.Row>
        <H.Row>
          <ItemArtistComponent item={movie} onPress={onPress} />
        </H.Row>
        <H.Row>
          <ItemBannerComponent movie={movie} onPress={onPress} />
        </H.Row>
        <H.Row>
          <ItemMovieSmallComponent item={movie} onPress={onPress} />
        </H.Row>
        <H.Row>
          <RateMovieComponent movie={movie} onPress={onPress} />
        </H.Row>
      </H.Container>
    </SafeArea>
  );
};

export default SettingsScreen;
