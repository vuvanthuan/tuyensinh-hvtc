import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ChartPieSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1A11 11 0 0 0 12 1" />
            <path d="M9 4.512a1 1 0 0 0-1.333-.943C3.784 4.942 1 8.644 1 13c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667A1 1 0 0 0 19.489 15H11a2 2 0 0 1-2-2z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ChartPieSolid;
