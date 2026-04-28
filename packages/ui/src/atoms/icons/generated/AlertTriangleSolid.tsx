import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function AlertTriangleSolid(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, icon: _icon, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 24 24"
          {...props}
        >
          <g clipPath="url(#prefix__a)">
            <path
              fill="#11181C"
              fillRule="evenodd"
              d="M9.827 2.229c.967-1.639 3.38-1.639 4.347 0l9.486 16.073c.998 1.691-.296 3.698-2.174 3.698H2.514C.636 22-.658 19.993.34 18.302zm.232 4.826A1 1 0 0 1 11.057 6h1.886a1 1 0 0 1 .998 1.055l-.389 7a1 1 0 0 1-.998.945h-1.108a1 1 0 0 1-.998-.944zM14 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default AlertTriangleSolid;
