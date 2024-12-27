import { SvgIcon, SvgIconProps } from '@mui/material';
import React, { FunctionComponent } from 'react';

const CursorIcon: FunctionComponent<SvgIconProps> = (props: SvgIconProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props} viewBox="0 0 24 24">
    <rect x="10" y="6" width="4" height="16" fill="#e7eaf6" />
  </SvgIcon>
);

export default CursorIcon;