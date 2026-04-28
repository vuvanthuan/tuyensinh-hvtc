import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Dots6HorizontalLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M7 15.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 8.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M14 8.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M19 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21 8.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Dots6HorizontalLight;
