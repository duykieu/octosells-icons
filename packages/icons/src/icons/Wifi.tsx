import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Wifi: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.58 13.5473C8.55656 11.901 11.0476 10.9995 13.62 10.9995C16.1924 10.9995 18.6834 11.901 20.66 13.5473M3 9.99735C5.92242 7.42132 9.6843 6 13.58 6C17.4757 6 21.2376 7.42132 24.16 9.99735M10.11 17.1074C11.1252 16.3861 12.3397 15.9986 13.585 15.9986C14.8303 15.9986 16.0448 16.3861 17.06 17.1074M14.58 21.9973C14.58 22.5496 14.1323 22.9973 13.58 22.9973C13.0277 22.9973 12.58 22.5496 12.58 21.9973C12.58 21.445 13.0277 20.9973 13.58 20.9973C14.1323 20.9973 14.58 21.445 14.58 21.9973Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Wifi;
