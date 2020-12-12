import React, {memo, useMemo} from 'react';

import {Button, Text, Loading} from './styles';
import CheckIcon from '~/assets/svgIcon/check';

import PropTypes from 'prop-types';

const PrimaryButtonComponent = (props) => {
  const content = useMemo(() => {
    if (props.loading) {
      return <Loading />;
    }
    if (props.success) {
      return <CheckIcon fill="#fff" width={20} />;
    }
    return <Text>{props.children}</Text>;
  }, [props]);
  return (
    <Button disabled={props.loading} {...props}>
      {content}
    </Button>
  );
};

PrimaryButtonComponent.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
};

export default memo(PrimaryButtonComponent);
