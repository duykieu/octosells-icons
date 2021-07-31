
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const DollarSign: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    <svg width={width || size} height={height || size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 3V25M19 7H11.5C10.5717 7 9.6815 7.36875 9.02513 8.02513C8.36875 8.6815 8 9.57174 8 10.5C8 11.4283 8.36875 12.3185 9.02513 12.9749C9.6815 13.6313 10.5717 14 11.5 14H16.5C17.4283 14 18.3185 14.3687 18.9749 15.0251C19.6313 15.6815 20 16.5717 20 17.5C20 18.4283 19.6313 19.3185 18.9749 19.9749C18.3185 20.6313 17.4283 21 16.5 21H8" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default DollarSign;
