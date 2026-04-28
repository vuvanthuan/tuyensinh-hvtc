import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PercentSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M21.414 3.293a1 1 0 0 1 0 1.414L4.707 21.414a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 0-1.414L19.293 2.586a1 1 0 0 1 1.414 0zM7.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M16.5 14a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default PercentSolid;
