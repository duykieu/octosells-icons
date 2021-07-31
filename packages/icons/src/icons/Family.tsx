
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Family: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7125 8.675C17.7125 10.7 16.0625 12.35 14 12.35C11.9375 12.35 10.2875 10.7 10.2875 8.675C10.2875 6.65 11.9375 5 14 5C16.0625 5 17.7125 6.65 17.7125 8.675Z" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14.1125C9.0125 14.1125 5 18.0875 5 23H23C23 18.0875 18.9875 14.1125 14 14.1125Z" stroke="#121212" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Family;
