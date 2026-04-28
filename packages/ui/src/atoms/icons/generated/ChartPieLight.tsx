import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ChartPieLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M12 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1A11 11 0 0 0 12 1m1 10V3.056A9 9 0 0 1 20.944 11z"
              clipRule="evenodd"
            />
            <path d="M8.333 5.455a1 1 0 1 0-.666-1.886C3.784 4.942 1 8.644 1 13c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.885-.666A8 8 0 1 1 8.333 5.455" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ChartPieLight;
