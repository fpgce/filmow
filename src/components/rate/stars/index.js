import React, {useState, useMemo} from 'react';

import StarIcon from '~/assets/svgIcon/star';
import {useTheme} from 'styled-components';

import * as S from './styles';
import PropTypes from 'prop-types';

const StartComponent = ({callbackSelected}) => {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  const renderButtons = useMemo(() => {
    function updateValues(val) {
      setCount(val);
      callbackSelected(val);
    }

    return [1, 2, 3, 4, 5].map((val) => (
      <S.Button key={val} onPress={() => updateValues(val)}>
        <StarIcon
          size={30}
          fill={val <= count ? theme.color.primary_dark : 'none'}
          stroke={theme.color.primary_dark}
        />
      </S.Button>
    ));
  }, [theme, count, callbackSelected]);

  return <S.Container>{renderButtons}</S.Container>;
};

StartComponent.propTypes = {
  callbackSelected: PropTypes.func.isRequired,
};

export default StartComponent;
