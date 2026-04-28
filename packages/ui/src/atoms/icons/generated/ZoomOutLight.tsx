import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ZoomOutLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M5.5 10a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1" />
            <path
              fillRule="evenodd"
              d="M1 10a9 9 0 1 1 16.032 5.618l4.675 4.675a1 1 0 0 1-1.414 1.414l-4.675-4.675A9 9 0 0 1 1 10m9-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ZoomOutLight;
