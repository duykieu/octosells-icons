
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Power: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.365 8.64C21.6234 9.89879 22.4803 11.5024 22.8273 13.2482C23.1743 14.9939 22.9959 16.8034 22.3146 18.4478C21.6334 20.0921 20.4798 21.4976 18.9998 22.4864C17.5199 23.4752 15.7799 24.0029 14 24.0029C12.2201 24.0029 10.4802 23.4752 9.00018 22.4864C7.5202 21.4976 6.36664 20.0921 5.68537 18.4478C5.00409 16.8034 4.82569 14.9939 5.17272 13.2482C5.51975 11.5024 6.37663 9.89879 7.635 8.64M14.005 4V14" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Power;
