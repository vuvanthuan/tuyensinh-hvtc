import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CheckmarkCircleLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M17.809 9.706a1 1 0 1 0-1.418-1.412l-5.77 5.795-3.319-3.273a1 1 0 0 0-1.404 1.424l4.028 3.972a1 1 0 0 0 1.41-.006z" />
            <path
              fillRule="evenodd"
              d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CheckmarkCircleLight;
