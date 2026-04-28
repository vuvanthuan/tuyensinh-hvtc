import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowToLineLeftLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M2 20a1 1 0 1 0 2 0V4a1 1 0 0 0-2 0zM13.707 17.707a1 1 0 0 0 0-1.414L10.414 13H21a1 1 0 1 0 0-2H10.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowToLineLeftLight;
