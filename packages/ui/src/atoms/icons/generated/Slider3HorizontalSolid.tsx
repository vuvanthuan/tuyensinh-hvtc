import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Slider3HorizontalSolid(
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
            <path d="M3 21.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zM15.5 21.5V23a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1.5H21a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zM15.5 1v1.5H21a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5.5V7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1M2 4.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zM13 13.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zM2 12.5a1 1 0 0 0 1 1h3.5V15a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1.5H3a1 1 0 0 0-1 1z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Slider3HorizontalSolid;
