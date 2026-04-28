import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function HalfStarSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 1a1 1 0 0 0-.912.59L8.27 7.868l-6.84.74a1 1 0 0 0-.564 1.735l5.099 4.619-1.41 6.733a1 1 0 0 0 1.476 1.073L12 19.345z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default HalfStarSolid;
