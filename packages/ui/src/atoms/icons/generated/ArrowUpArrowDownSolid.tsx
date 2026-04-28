import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowUpArrowDownSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M17.5 3a1 1 0 0 1 1 1v11H21a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 13 15h2.5V4a1 1 0 0 1 1-1zM3 9a1 1 0 0 1-.707-1.707L5.5 4.086V4h.086l.707-.707a1 1 0 0 1 1.414 0L8.414 4H8.5v.086l3.207 3.207A1 1 0 0 1 11 9H8.5v11a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowUpArrowDownSolid;
