import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTurnLeftUpSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M3.076 8.383A1 1 0 0 0 4 9h2.5v6.5A5.5 5.5 0 0 0 12 21h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-8a2.5 2.5 0 0 1-2.5-2.5V9H12a1 1 0 0 0 .707-1.707L9.212 3.798l-.01-.01-.495-.495a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0-.217 1.09"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTurnLeftUpSolid;
