
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Travel: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6939 11.825H18.7815L15.0315 5H11.8814L13.9065 11.825H9.44394L7.56894 9.275H4.98145L6.14395 14L4.98145 18.725H7.56894L9.44394 16.175H13.9065L11.8814 23H15.0315L18.8189 16.175H20.7314C22.0064 16.175 23.0189 15.2 23.0189 14C22.9814 12.8 21.9314 11.825 20.6939 11.825Z" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Travel;
