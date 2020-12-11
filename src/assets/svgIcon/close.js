import React from 'react';
import {Svg, Path} from 'react-native-svg';

/**
 *
 * Svg transformer dont works fine when set stroke color into Path elements
 *
 * @param {string} props fill
 * @param {string} props stroke
 * @param {number} props size
 * @param {number} props width
 * @param {number} props height
 */

const SvgSearchIcon = (props) => {
  return (
    <Svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M9 1L0.5 9.5M0.5 1L9 9.5" stroke={props.stroke} />
    </Svg>
  );
};

export default SvgSearchIcon;
