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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={props.stroke}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21 21L16.65 16.65"
        stroke={props.stroke}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default SvgSearchIcon;
