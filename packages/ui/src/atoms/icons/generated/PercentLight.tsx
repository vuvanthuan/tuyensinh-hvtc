import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PercentLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M20.707 3.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0" />
            <path
              fillRule="evenodd"
              d="M4 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M7.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16.5 14a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M15 17.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default PercentLight;
