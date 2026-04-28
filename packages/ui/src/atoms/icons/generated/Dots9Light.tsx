import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Dots9Light(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M21 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M14 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Dots9Light;
