import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CompassLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C" fillRule="evenodd" clipRule="evenodd">
            <path d="M17.189 8.076a1 1 0 0 0-1.265-1.265l-6.36 2.12a1 1 0 0 0-.633.633l-2.12 6.36a1 1 0 0 0 1.265 1.265l6.36-2.12a1 1 0 0 0 .633-.633zM9.34 14.66l1.33-3.988 3.988-1.33-1.33 3.989z" />
            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CompassLight;
