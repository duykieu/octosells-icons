import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const MoreHorizontal: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 15C21.5523 15 22 14.5523 22 14C22 13.4477 21.5523 13 21 13C20.4477 13 20 13.4477 20 14C20 14.5523 20.4477 15 21 15Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 15C7.55228 15 8 14.5523 8 14C8 13.4477 7.55228 13 7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15Z"
        stroke="#121212"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MoreHorizontal;
