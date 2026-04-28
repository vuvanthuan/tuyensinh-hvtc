import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Slider3VerticalSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M2.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM2.5 15.5H1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM23 15.5h-1.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.5H17a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1M19.5 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM10.5 13a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM11.5 2a1 1 0 0 0-1 1v3.5H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1.5V3a1 1 0 0 0-1-1z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Slider3VerticalSolid;
