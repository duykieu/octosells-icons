import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const ThumbsDown: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18.6826 4.00036H21.3526C21.9186 3.99035 22.4685 4.1885 22.8981 4.55718C23.3276 4.92586 23.6068 5.43942 23.6826 6.00036V13.0004C23.6068 13.5613 23.3276 14.0749 22.8981 14.4435C22.4685 14.8122 21.9186 15.0104 21.3526 15.0004H18.6826M11.6826 17.0004V21.0004C11.6826 21.796 11.9987 22.5591 12.5613 23.1217C13.1239 23.6843 13.887 24.0004 14.6826 24.0004L18.6826 15.0004V4.00036H7.40265C6.92032 3.99491 6.45227 4.16396 6.08474 4.47636C5.71721 4.78875 5.47497 5.22346 5.40265 5.70036L4.02265 14.7004C3.97914 14.987 3.99847 15.2797 4.07931 15.5581C4.16014 15.8365 4.30055 16.0941 4.49079 16.3128C4.68103 16.5316 4.91657 16.7064 5.18108 16.8251C5.44558 16.9439 5.73274 17.0036 6.02265 17.0004H11.6826Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ThumbsDown;
