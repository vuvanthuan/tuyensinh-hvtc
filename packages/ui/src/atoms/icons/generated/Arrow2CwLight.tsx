import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Arrow2CwLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C">
            <path d="M2.061 10.89C2.614 5.89 6.852 2 12 2c2.236 0 4.04.885 5.581 2.032.846.63 1.654 1.375 2.419 2.112V3a1 1 0 1 1 2 0v5.5a.996.996 0 0 1-1 1h-5.5a1 1 0 1 1 0-2h3.024c-.696-.67-1.387-1.305-2.137-1.864C15.054 4.644 13.662 4 12 4a8 8 0 0 0-7.951 7.11 1 1 0 0 1-1.988-.22M21.994 13.11c-.553 5-4.791 8.89-9.94 8.89-2.236 0-4.04-.885-5.58-2.032-.847-.63-1.654-1.375-2.42-2.112V21a1 1 0 1 1-2 0v-5.5a1 1 0 0 1 .592-.913 1 1 0 0 1 .409-.087h5.5a1 1 0 1 1 0 2H5.53c.696.67 1.387 1.305 2.137 1.864C9.001 19.356 10.393 20 12.055 20a8 8 0 0 0 7.951-7.11 1 1 0 1 1 1.988.22" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Arrow2CwLight;
