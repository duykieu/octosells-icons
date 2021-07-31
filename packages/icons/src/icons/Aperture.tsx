
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Aperture: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.31 10L22.05 19.94M11.69 10H23.17M9.38 14L15.12 4.06M11.69 18L5.95 8.06M16.31 18H4.83M18.62 14L12.88 23.94M24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Aperture;
