import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ShoppingBag: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M5 8L8 4H20L23 8M5 8V22C5 22.5304 5.21071 23.0391 5.58579 23.4142C5.96086 23.7893 6.46957 24 7 24H21C21.5304 24 22.0391 23.7893 22.4142 23.4142C22.7893 23.0391 23 22.5304 23 22V8M5 8H23M18 12C18 13.0609 17.5786 14.0783 16.8284 14.8284C16.0783 15.5786 15.0609 16 14 16C12.9391 16 11.9217 15.5786 11.1716 14.8284C10.4214 14.0783 10 13.0609 10 12"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ShoppingBag;
