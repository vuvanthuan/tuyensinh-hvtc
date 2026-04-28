import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTurnRightUpSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4 18h8a2.5 2.5 0 0 0 2.5-2.5V9H12a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 20 9h-2.5v6.5A5.5 5.5 0 0 1 12 21H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTurnRightUpSolid;
