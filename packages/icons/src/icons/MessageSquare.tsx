import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const MessageSquare: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M23 17C23 17.5304 22.7893 18.0391 22.4142 18.4142C22.0391 18.7893 21.5304 19 21 19H9L5 23V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H21C21.5304 5 22.0391 5.21071 22.4142 5.58579C22.7893 5.96086 23 6.46957 23 7V17Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MessageSquare;
