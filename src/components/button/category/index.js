import React from 'react';

import {Button, Text} from './styles';

const CategoryButtonComponent = (props) => {
  return (
    <Button {...props}>
      <Text {...{light: props.light}}>{props.children}</Text>
    </Button>
  );
};

export default CategoryButtonComponent;
