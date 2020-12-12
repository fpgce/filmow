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
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.5953 18.9949L15.5964 19.0006L15.5811 18.9999L15.5561 19L10.4638 16.3341L10 16.0912L9.53619 16.3341L4.43619 19.0041L4.43459 19.0049L5.4346 13.3749L5.52742 12.8523L5.14659 12.4825L1.05179 8.50698L6.7341 7.67955L7.25632 7.60351L7.48825 7.12948L9.99825 1.99948L9.99826 1.99949L9.99998 1.99593L10.0042 2.0044L12.5442 7.1244L12.7772 7.59402L13.2959 7.66955L18.9782 8.49698L14.8834 12.4725L14.5026 12.8423L14.5954 13.3649L15.5954 18.9949L15.5953 18.9949Z"
        stroke={props.stroke}
        stroke-width="2"
      />
    </Svg>
  );
};

export default SvgSearchIcon;
