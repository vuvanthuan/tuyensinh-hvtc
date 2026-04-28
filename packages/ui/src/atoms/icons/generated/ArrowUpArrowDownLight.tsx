import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowUpArrowDownLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M18 4a1 1 0 1 0-2 0v13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 .76.292 1 1 0 0 0 .666-.304l3.988-3.988a1 1 0 0 0-1.414-1.414L18 17.586zM8 20V6.414l2.293 2.293a1 1 0 1 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L6 6.414V20a1 1 0 1 0 2 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowUpArrowDownLight;
