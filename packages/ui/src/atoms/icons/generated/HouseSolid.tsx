import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function HouseSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M11.386 1.21a1 1 0 0 1 1.228 0l9 7A1 1 0 0 1 22 9v11.5a1.5 1.5 0 0 1-1.5 1.5H15v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8H3.5A1.5 1.5 0 0 1 2 20.5V9a1 1 0 0 1 .386-.79z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default HouseSolid;
