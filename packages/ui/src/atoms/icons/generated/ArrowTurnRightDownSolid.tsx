import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTurnRightDownSolid(
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
            d="M4 6h8a2.5 2.5 0 0 1 2.5 2.5V15H12a1 1 0 0 0-.707 1.707l3.495 3.496.01.009.495.495a1 1 0 0 0 1.414 0l4-4A1 1 0 0 0 20 15h-2.5V8.5A5.5 5.5 0 0 0 12 3H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTurnRightDownSolid;
