import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowThinDownSolid(allProps: IconWrapperProps): React.ReactElement {
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
          <path
            fill="#11181C"
            d="M7.076 16.617A1 1 0 0 1 8 16h2.5V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v13H16a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1-.217-1.09"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowThinDownSolid;
