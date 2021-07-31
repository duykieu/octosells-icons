import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Mic: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M21 12V14C21 15.8565 20.2625 17.637 18.9497 18.9497C17.637 20.2625 15.8565 21 14 21M14 21C12.1435 21 10.363 20.2625 9.05025 18.9497C7.7375 17.637 7 15.8565 7 14V12M14 21V25M10 25H18M14 3C13.2044 3 12.4413 3.31607 11.8787 3.87868C11.3161 4.44129 11 5.20435 11 6V14C11 14.7956 11.3161 15.5587 11.8787 16.1213C12.4413 16.6839 13.2044 17 14 17C14.7956 17 15.5587 16.6839 16.1213 16.1213C16.6839 15.5587 17 14.7956 17 14V6C17 5.20435 16.6839 4.44129 16.1213 3.87868C15.5587 3.31607 14.7956 3 14 3Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Mic;
