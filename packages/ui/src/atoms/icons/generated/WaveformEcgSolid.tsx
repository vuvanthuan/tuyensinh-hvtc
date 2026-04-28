import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function WaveformEcgSolid(allProps: IconWrapperProps): React.ReactElement {
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
            fillRule="evenodd"
            d="M9 1.5a1.5 1.5 0 0 1 1.423 1.026L15 16.256l1.577-4.73A1.5 1.5 0 0 1 18 10.5h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2.919l-2.658 7.974a1.5 1.5 0 0 1-2.846 0L9 7.744l-1.577 4.73A1.5 1.5 0 0 1 6 13.5H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2.919l2.658-7.974A1.5 1.5 0 0 1 9 1.5"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default WaveformEcgSolid;
