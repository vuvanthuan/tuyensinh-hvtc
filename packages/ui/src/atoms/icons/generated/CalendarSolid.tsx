import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CalendarSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8 .5A1.5 1.5 0 0 1 9.5 2v1h5V2a1.5 1.5 0 0 1 3 0v1H19a3 3 0 0 1 3 3v2H2V6a3 3 0 0 1 3-3h1.5V2A1.5 1.5 0 0 1 8 .5M2 20V10h20v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CalendarSolid;
