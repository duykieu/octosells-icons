
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Unlock: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 13.005V9.00504C8.99875 7.76508 9.45828 6.5689 10.2894 5.6487C11.1205 4.7285 12.2638 4.14994 13.4975 4.02533C14.7312 3.90071 15.9671 4.23894 16.9655 4.97435C17.9638 5.70976 18.6533 6.78988 18.9 8.00504M7 13.005H21C22.1046 13.005 23 13.9005 23 15.005V22.005C23 23.1096 22.1046 24.005 21 24.005H7C5.89543 24.005 5 23.1096 5 22.005V15.005C5 13.9005 5.89543 13.005 7 13.005Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Unlock;
