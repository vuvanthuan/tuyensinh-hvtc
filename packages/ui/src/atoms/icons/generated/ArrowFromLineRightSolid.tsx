import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowFromLineRightSolid(
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
            <path d="M5 4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zM16 16a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414l-4-4A1 1 0 0 0 16 8v2.5H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowFromLineRightSolid;
