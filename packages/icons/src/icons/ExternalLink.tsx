import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ExternalLink: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M20 15V21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23H7C6.46957 23 5.96086 22.7893 5.58579 22.4142C5.21071 22.0391 5 21.5304 5 21V10C5 9.46957 5.21071 8.96086 5.58579 8.58579C5.96086 8.21071 6.46957 8 7 8H13M17 5H23M23 5V11M23 5L12 16"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ExternalLink;
