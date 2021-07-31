
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const RotateCcw: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5.99067V11.9907M4 11.9907H10M4 11.9907L8.64 7.63067C10.0209 6.25209 11.8125 5.35964 13.7447 5.08779C15.6769 4.81593 17.6451 5.17941 19.3528 6.12344C21.0605 7.06747 22.4152 8.54091 23.2126 10.3218C24.0101 12.1026 24.2072 14.0944 23.7742 15.997C23.3413 17.8996 22.3017 19.61 20.8121 20.8704C19.3226 22.1308 17.4637 22.873 15.5157 22.9851C13.5677 23.0973 11.636 22.5732 10.0117 21.492C8.38734 20.4109 7.15839 18.831 6.51 16.9907" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default RotateCcw;
