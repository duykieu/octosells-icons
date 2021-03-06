import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ShoppingCart: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M2 3H6L8.68 16.39C8.77144 16.8504 9.02191 17.264 9.38755 17.5583C9.75318 17.8526 10.2107 18.009 10.68 18H20.4C20.8693 18.009 21.3268 17.8526 21.6925 17.5583C22.0581 17.264 22.3086 16.8504 22.4 16.39L24 8H7M11 23C11 23.5523 10.5523 24 10 24C9.44772 24 9 23.5523 9 23C9 22.4477 9.44772 22 10 22C10.5523 22 11 22.4477 11 23ZM22 23C22 23.5523 21.5523 24 21 24C20.4477 24 20 23.5523 20 23C20 22.4477 20.4477 22 21 22C21.5523 22 22 22.4477 22 23Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ShoppingCart;
