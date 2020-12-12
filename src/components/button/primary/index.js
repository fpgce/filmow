import React, {memo, useMemo} from 'react';

import {Button, Text, Loading} from './styles';
import CheckIcon from '~/assets/svgIcon/check';

const CategoryButtonComponent = (props) => {
  const content = useMemo(() => {
    if (props.loading) {
      return <Loading />;
    }
    if (props.success) {
      return <CheckIcon fill="#fff" width={20} />;
    }
    return <Text {...{active: props.active}}>{props.children}</Text>;
  }, [props]);
  return (
    <Button disabled={props.loading} {...props}>
      {content}
    </Button>
  );
};

export default memo(CategoryButtonComponent);
