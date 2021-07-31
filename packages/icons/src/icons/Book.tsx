
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Book: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 21.5C6 20.837 6.26339 20.2011 6.73223 19.7322C7.20107 19.2634 7.83696 19 8.5 19H22M6 21.5C6 22.163 6.26339 22.7989 6.73223 23.2678C7.20107 23.7366 7.83696 24 8.5 24H22V4H8.5C7.83696 4 7.20107 4.26339 6.73223 4.73223C6.26339 5.20107 6 5.83696 6 6.5V21.5Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Book;
