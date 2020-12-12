import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

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
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="45.701px"
      height="45.7px"
      viewBox="0 0 45.701 45.7"
      style="enable-background:new 0 0 45.701 45.7;"
      xmlSpage="preserve"
      {...props}>
      <G>
        <G>
          <Path
            d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504
			c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0
			c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"
          />
        </G>
      </G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
    </Svg>
  );
};

export default SvgSearchIcon;
