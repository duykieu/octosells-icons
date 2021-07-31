
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Medicine: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.96246 15.0125H11.9L14.4875 5L16.5125 23L18.875 11.5625L19.6625 15.65H23M7.925 15.0125C7.925 15.8202 7.27022 16.475 6.4625 16.475C5.65478 16.475 5 15.8202 5 15.0125C5 14.2048 5.65478 13.55 6.4625 13.55C7.27022 13.55 7.925 14.2048 7.925 15.0125Z" stroke={color} stroke-miterlimit="10" stroke-linejoin="round"/>
</svg>

  );
};

export default Medicine;
