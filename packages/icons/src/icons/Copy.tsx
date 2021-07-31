import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Copy: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M7 17H6C5.46957 17 4.96086 16.7893 4.58579 16.4142C4.21071 16.0391 4 15.5304 4 15V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V7M13 11H22C23.1046 11 24 11.8954 24 13V22C24 23.1046 23.1046 24 22 24H13C11.8954 24 11 23.1046 11 22V13C11 11.8954 11.8954 11 13 11Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Copy;
