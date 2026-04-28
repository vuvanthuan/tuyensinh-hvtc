import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowToShapeRightSolid(
  allProps: IconWrapperProps,
): React.ReactElement {
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
            <path d="M16.25 19.75a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3.5a2.5 2.5 0 0 0 2.5-2.5v-16a2.5 2.5 0 0 0-2.5-2.5h-3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3v15z" />
            <path d="M10.75 16.25a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.707.707v2.5h-8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowToShapeRightSolid;
