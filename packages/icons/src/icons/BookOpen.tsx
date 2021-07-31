import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const BookOpen: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M14 9C14 7.93913 13.5786 6.92172 12.8284 6.17157C12.0783 5.42143 11.0609 5 10 5H4V20H11C11.7956 20 12.5587 20.3161 13.1213 20.8787C13.6839 21.4413 14 22.2044 14 23M14 9V23M14 9C14 7.93913 14.4214 6.92172 15.1716 6.17157C15.9217 5.42143 16.9391 5 18 5H24V20H17C16.2044 20 15.4413 20.3161 14.8787 20.8787C14.3161 21.4413 14 22.2044 14 23"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BookOpen;
