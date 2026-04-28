import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DeviceTabletSolid(allProps: IconWrapperProps): React.ReactElement {
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
          <path
            fill="#11181C"
            fillRule="evenodd"
            d="M6.286 23C4.6 23 3 21.778 3 20V4c0-1.778 1.6-3 3.286-3h11.428C19.4 1 21 2.222 21 4v16c0 1.778-1.6 3-3.286 3zM12 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default DeviceTabletSolid;
