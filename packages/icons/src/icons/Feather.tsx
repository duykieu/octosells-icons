import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Feather: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18 10.0083L4 24.0083M19 17.0083H11M22.24 14.2483C23.3658 13.1225 23.9983 11.5955 23.9983 10.0033C23.9983 8.41115 23.3658 6.88418 22.24 5.75834C21.1142 4.63249 19.5872 4 17.995 4C16.4028 4 14.8758 4.63249 13.75 5.75834L7 12.5083V21.0083H15.5L22.24 14.2483Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Feather;
