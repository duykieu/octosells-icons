import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const UploadCloud: React.FunctionComponent<IOctosellsIcons> = ({
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
        d="M18.0053 17.9975L14.0053 13.9975M14.0053 13.9975L10.0053 17.9975M14.0053 13.9975V22.9975M22.3953 20.3875C23.3707 19.8558 24.1412 19.0144 24.5852 17.9962C25.0292 16.9779 25.1215 15.8408 24.8475 14.7642C24.5735 13.6877 23.9488 12.7331 23.072 12.051C22.1952 11.3689 21.1162 10.9983 20.0053 10.9975H18.7453C18.4426 9.82678 17.8785 8.73988 17.0953 7.81854C16.3121 6.89719 15.3302 6.16539 14.2234 5.67815C13.1167 5.19091 11.9139 4.9609 10.7054 5.00542C9.49701 5.04995 8.3144 5.36784 7.24651 5.93521C6.17862 6.50257 5.25324 7.30465 4.53995 8.28112C3.82666 9.2576 3.34402 10.3831 3.12831 11.5729C2.9126 12.7628 2.96944 13.9861 3.29454 15.1508C3.61965 16.3155 4.20457 17.3914 5.00533 18.2975"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UploadCloud;
