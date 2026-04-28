import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTurnLeftDownSolid(
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
          <path
            fill="#11181C"
            d="M20 6h-8a2.5 2.5 0 0 0-2.5 2.5V15H12a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 15h2.5V8.5A5.5 5.5 0 0 1 12 3h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTurnLeftDownSolid;
