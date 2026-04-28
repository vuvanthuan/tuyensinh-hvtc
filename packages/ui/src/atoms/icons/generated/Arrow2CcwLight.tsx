import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Arrow2CcwLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M21.994 10.89c-.553-5-4.791-8.89-9.94-8.89-2.236 0-4.04.885-5.58 2.032-.847.63-1.654 1.375-2.42 2.112V3a1 1 0 1 0-2 0v5.5a.996.996 0 0 0 1 1h5.5a1 1 0 0 0 0-2H5.532c.696-.67 1.387-1.305 2.137-1.864C9.001 4.644 10.393 4 12.055 4a8 8 0 0 1 7.951 7.11 1 1 0 1 0 1.988-.22M2.061 13.11C2.614 18.11 6.852 22 12 22c2.236 0 4.04-.885 5.581-2.032.846-.63 1.654-1.375 2.419-2.112V21a1 1 0 1 0 2 0v-5.5a1 1 0 0 0-.59-.913A1 1 0 0 0 21 14.5h-5.5a1 1 0 1 0 0 2h3.024c-.696.67-1.387 1.305-2.137 1.864C15.054 19.356 13.662 20 12 20a8 8 0 0 1-7.951-7.11 1 1 0 0 0-1.988.22" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Arrow2CcwLight;
