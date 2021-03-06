import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const Bills: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M20.2064 20.375C20.2064 21.8 19.0439 23 17.5814 23H10.4189C8.99395 23 7.79395 21.8 7.79395 20.375V7.625C7.79395 6.2 8.99395 5 10.4189 5H17.5814C19.0439 5 20.2064 6.2 20.2064 7.625V20.375Z"
        stroke={color}
        stroke-miterlimit="10"
      />
      <path
        d="M18.4439 6.94998H9.55643V10.2125H18.4439V6.94998Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M11.3564 12.3875H9.55643V14.1125H11.3564V12.3875Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M14.9189 12.3875H13.1189V14.1125H14.9189V12.3875Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M18.444 12.3875H16.644V14.1125H18.444V12.3875Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M11.3564 15.5H9.55643V17.225H11.3564V15.5Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M14.9189 15.5H13.1189V17.225H14.9189V15.5Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M18.444 15.5H16.644V17.225H18.444V15.5Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M11.3564 18.575H9.55643V20.3H11.3564V18.575Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M14.9189 18.575H13.1189V20.3H14.9189V18.575Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
      <path
        d="M18.444 18.575H16.644V20.3H18.444V18.575Z"
        stroke="#121212"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Bills;
