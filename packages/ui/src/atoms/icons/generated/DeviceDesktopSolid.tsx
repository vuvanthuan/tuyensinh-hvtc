import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DeviceDesktopSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4 1.5C2.174 1.5.5 2.9.5 4.857v9.286C.5 16.1 2.174 17.5 4 17.5h6.5v2h-3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-3v-2H20c1.826 0 3.5-1.4 3.5-3.357V4.857C23.5 2.9 21.826 1.5 20 1.5z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default DeviceDesktopSolid;
