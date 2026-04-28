import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowToLineUpLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M4 2a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zM6.293 13.707a1 1 0 0 0 1.414 0L11 10.414V21a1 1 0 1 0 2 0V10.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowToLineUpLight;
