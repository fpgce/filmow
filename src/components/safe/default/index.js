import React from 'react';

import {useTheme} from 'styled-components/native';
import {Safe} from './styles';

const SafeArea = (props) => {
  return <Safe {...props}>{props.children}</Safe>;
};

export default SafeArea;
