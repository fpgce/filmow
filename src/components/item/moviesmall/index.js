import React, {memo} from 'react';

import * as M from './styles';

import {useTheme} from 'styled-components/native';
import config from '~/config/environments';
import {getOnlyYear} from '~/utils/date';
import PropTypes from 'prop-types';

const MovieSmallComponent = ({item, onPress}) => {
  const theme = useTheme();
  return (
    <M.Container onPress={() => onPress(item)} style={[theme.shadow]}>
      <M.Thumb
        source={{
          uri: `${config.base_image_path}/w200${item.poster_path}`,
        }}
      />
      <M.View>
        <M.Title>{item.title}</M.Title>
        <M.Row>
          <M.Small>{getOnlyYear(item.release_date)}</M.Small>
          <M.Circle />
          <M.Small>{item.vote_average}/10</M.Small>
        </M.Row>
      </M.View>
    </M.Container>
  );
};

MovieSmallComponent.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default memo(MovieSmallComponent);
