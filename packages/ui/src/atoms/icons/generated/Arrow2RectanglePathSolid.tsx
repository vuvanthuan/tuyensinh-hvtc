import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Arrow2RectanglePathSolid(
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
            <path d="M16.617 10.924A1 1 0 0 1 16 10V7.5H7A2.5 2.5 0 0 0 4.5 10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1A5.5 5.5 0 0 1 7 4.5h9V2a1 1 0 0 1 1.707-.707l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.09.217M7.383 13.076A1 1 0 0 1 8 14v2.5h9a2.5 2.5 0 0 0 2.5-2.5 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1 5.5 5.5 0 0 1-5.5 5.5H8V22a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.09-.217" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Arrow2RectanglePathSolid;
