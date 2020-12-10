import React from 'react';

import {Button, Text} from './styles';

const CategoryButtonComponent = (props) => {
  return (
    <Button {...props}>
      <Text {...{active: props.active}}>{props.children}</Text>
    </Button>
  );
};

export default CategoryButtonComponent;
