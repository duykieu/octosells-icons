
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Shopping: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.47266 7.7998L8.47266 3.7998H20.4727L23.4727 7.7998M5.47266 7.7998V21.7998C5.47266 22.3302 5.68337 22.8389 6.05844 23.214C6.43352 23.5891 6.94222 23.7998 7.47266 23.7998H21.4727C22.0031 23.7998 22.5118 23.5891 22.8869 23.214C23.2619 22.8389 23.4727 22.3302 23.4727 21.7998V7.7998M5.47266 7.7998H23.4727M18.4727 11.7998C18.4727 12.8607 18.0512 13.8781 17.3011 14.6282C16.5509 15.3784 15.5335 15.7998 14.4727 15.7998C13.4118 15.7998 12.3944 15.3784 11.6442 14.6282C10.8941 13.8781 10.4727 12.8607 10.4727 11.7998" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Shopping;
