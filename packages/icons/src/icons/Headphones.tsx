import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Headphones: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M5 20V14C5 11.6131 5.94821 9.32387 7.63604 7.63604C9.32387 5.94821 11.6131 5 14 5C16.3869 5 18.6761 5.94821 20.364 7.63604C22.0518 9.32387 23 11.6131 23 14V20M23 21C23 21.5304 22.7893 22.0391 22.4142 22.4142C22.0391 22.7893 21.5304 23 21 23H20C19.4696 23 18.9609 22.7893 18.5858 22.4142C18.2107 22.0391 18 21.5304 18 21V18C18 17.4696 18.2107 16.9609 18.5858 16.5858C18.9609 16.2107 19.4696 16 20 16H23V21ZM5 21C5 21.5304 5.21071 22.0391 5.58579 22.4142C5.96086 22.7893 6.46957 23 7 23H8C8.53043 23 9.03914 22.7893 9.41421 22.4142C9.78929 22.0391 10 21.5304 10 21V18C10 17.4696 9.78929 16.9609 9.41421 16.5858C9.03914 16.2107 8.53043 16 8 16H5V21Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Headphones;
