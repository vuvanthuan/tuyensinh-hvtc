import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowToLineDownLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M7.707 10.293 11 13.586V3a1 1 0 1 1 2 0v10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414M4 22a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowToLineDownLight;
