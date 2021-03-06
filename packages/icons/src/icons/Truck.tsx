import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Truck: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18 18V5H3V18H18ZM18 18H25V13L22 10H18V18ZM10 20.5C10 21.8807 8.88071 23 7.5 23C6.11929 23 5 21.8807 5 20.5C5 19.1193 6.11929 18 7.5 18C8.88071 18 10 19.1193 10 20.5ZM23 20.5C23 21.8807 21.8807 23 20.5 23C19.1193 23 18 21.8807 18 20.5C18 19.1193 19.1193 18 20.5 18C21.8807 18 23 19.1193 23 20.5Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Truck;
