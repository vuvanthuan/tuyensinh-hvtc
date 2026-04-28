import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowFromShapeUpSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8 8a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 8h-2.5v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8z" />
            <path d="M4.5 16.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V20A2.5 2.5 0 0 0 4 22.5h16a2.5 2.5 0 0 0 2.5-2.5v-3.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v3h-15z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowFromShapeUpSolid;
