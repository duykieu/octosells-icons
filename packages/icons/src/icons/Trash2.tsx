import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Trash2: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M5 8H7M7 8H23M7 8V22C7 22.5304 7.21071 23.0391 7.58579 23.4142C7.96086 23.7893 8.46957 24 9 24H19C19.5304 24 20.0391 23.7893 20.4142 23.4142C20.7893 23.0391 21 22.5304 21 22V8H7ZM10 8V6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6V8M12 13V19M16 13V19"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Trash2;
