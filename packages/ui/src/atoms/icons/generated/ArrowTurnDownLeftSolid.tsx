import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTurnDownLeftSolid(
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
            d="M18 4v8a2.5 2.5 0 0 1-2.5 2.5H9V12a1 1 0 0 0-1.707-.707l-4 4a1 1 0 0 0 0 1.414l4 4A1 1 0 0 0 9 20v-2.5h6.5A5.5 5.5 0 0 0 21 12V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTurnDownLeftSolid;
