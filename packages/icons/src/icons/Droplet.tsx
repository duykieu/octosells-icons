import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Droplet: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M13.995 4L19.655 9.66C20.7743 10.7786 21.5368 12.2041 21.8459 13.7561C22.155 15.308 21.9969 16.9168 21.3915 18.379C20.7862 19.8411 19.7608 21.0908 18.4451 21.9701C17.1294 22.8494 15.5825 23.3187 14 23.3187C12.4175 23.3187 10.8706 22.8494 9.5549 21.9701C8.23919 21.0908 7.21381 19.8411 6.60847 18.379C6.00312 16.9168 5.845 15.308 6.15411 13.7561C6.46321 12.2041 7.22566 10.7786 8.345 9.66L13.995 4Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Droplet;
