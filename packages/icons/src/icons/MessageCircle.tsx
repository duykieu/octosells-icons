import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const MessageCircle: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M23 13.5C23.0034 14.8199 22.6951 16.1219 22.1 17.3C21.3944 18.7118 20.3098 19.8992 18.9674 20.7293C17.6251 21.5594 16.0782 21.9994 14.5 22C13.1801 22.0035 11.8781 21.6951 10.7 21.1L5 23L6.9 17.3C6.30493 16.1219 5.99656 14.8199 6 13.5C6.00061 11.9218 6.44061 10.3749 7.27072 9.03258C8.10083 7.69028 9.28825 6.6056 10.7 5.90003C11.8781 5.30496 13.1801 4.99659 14.5 5.00003H15C17.0843 5.11502 19.053 5.99479 20.5291 7.47089C22.0052 8.94699 22.885 10.9157 23 13V13.5Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MessageCircle;
