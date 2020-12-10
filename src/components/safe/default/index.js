import React from 'react';

import {useTheme} from 'styled-components/native';
import {Safe} from './styles';

const SafeArea = ({children}) => {
  return <Safe>{children}</Safe>;
};

export default SafeArea;
