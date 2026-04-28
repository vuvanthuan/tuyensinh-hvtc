import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DeviceTabletLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
              fillRule="evenodd"
              d="M3 20c0 1.778 1.6 3 3.286 3h11.428C19.4 23 21 21.778 21 20V4c0-1.778-1.6-3-3.286-3H6.286C4.6 1 3 2.222 3 4zm3.286 1C5.446 21 5 20.431 5 20V4c0-.431.446-1 1.286-1h11.428C18.554 3 19 3.569 19 4v16c0 .431-.446 1-1.286 1z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default DeviceTabletLight;
