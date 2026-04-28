import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Dots6VerticalSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M15.5 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M10.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M15.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M10.5 20a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M15.5 22.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Dots6VerticalSolid;
