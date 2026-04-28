import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Slider3HorizontalLight(
  allProps: IconWrapperProps,
): React.ReactElement {
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
            <path d="M2 20a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M15 19v-2a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-2h6a1 1 0 1 0 0-2zM12 11a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zM2 12a1 1 0 0 1 1-1h4V9a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0v-2H3a1 1 0 0 1-1-1M15 3V1a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V5h6a1 1 0 1 0 0-2zM2 4a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Slider3HorizontalLight;
