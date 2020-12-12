import React from 'react';

import {Button, Text} from './styles';

import PropTypes from 'prop-types';

const CategoryButtonComponent = (props) => {
  return (
    <Button {...props}>
      <Text {...{active: props.active}}>{props.children}</Text>
    </Button>
  );
};

CategoryButtonComponent.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default CategoryButtonComponent;
