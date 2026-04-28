import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Dots6VerticalLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M15.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.5 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Dots6VerticalLight;
