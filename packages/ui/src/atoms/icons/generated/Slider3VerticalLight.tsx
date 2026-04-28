import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Slider3VerticalLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M4 2a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M5 15h2a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2h2v6a1 1 0 1 0 2 0zM13 12a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zM12 2a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V3a1 1 0 0 1 1-1M21 15h2a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2h2v6a1 1 0 1 0 2 0zM20 2a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Slider3VerticalLight;
