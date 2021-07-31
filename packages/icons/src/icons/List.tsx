import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const List: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M10 8.5H23V7.5H10V8.5ZM10 14.5H23V13.5H10V14.5ZM10 20.5H23V19.5H10V20.5ZM5.5 8C5.5 8.27614 5.27614 8.5 5 8.5V9.5C5.82843 9.5 6.5 8.82843 6.5 8H5.5ZM5 8.5C4.72386 8.5 4.5 8.27614 4.5 8H3.5C3.5 8.82843 4.17157 9.5 5 9.5V8.5ZM4.5 8C4.5 7.72386 4.72386 7.5 5 7.5V6.5C4.17157 6.5 3.5 7.17157 3.5 8H4.5ZM5 7.5C5.27614 7.5 5.5 7.72386 5.5 8H6.5C6.5 7.17157 5.82843 6.5 5 6.5V7.5ZM5.5 14C5.5 14.2761 5.27614 14.5 5 14.5V15.5C5.82843 15.5 6.5 14.8284 6.5 14H5.5ZM5 14.5C4.72386 14.5 4.5 14.2761 4.5 14H3.5C3.5 14.8284 4.17157 15.5 5 15.5V14.5ZM4.5 14C4.5 13.7239 4.72386 13.5 5 13.5V12.5C4.17157 12.5 3.5 13.1716 3.5 14H4.5ZM5 13.5C5.27614 13.5 5.5 13.7239 5.5 14H6.5C6.5 13.1716 5.82843 12.5 5 12.5V13.5ZM5.5 20C5.5 20.2761 5.27614 20.5 5 20.5V21.5C5.82843 21.5 6.5 20.8284 6.5 20H5.5ZM5 20.5C4.72386 20.5 4.5 20.2761 4.5 20H3.5C3.5 20.8284 4.17157 21.5 5 21.5V20.5ZM4.5 20C4.5 19.7239 4.72386 19.5 5 19.5V18.5C4.17157 18.5 3.5 19.1716 3.5 20H4.5ZM5 19.5C5.27614 19.5 5.5 19.7239 5.5 20H6.5C6.5 19.1716 5.82843 18.5 5 18.5V19.5Z"
        fill={color}
      />
    </svg>
  );
};

export default List;
