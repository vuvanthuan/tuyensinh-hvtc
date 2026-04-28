import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowToShapeDownSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M3.5 15.5a1 1 0 0 1 1 1v3h15v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V20a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 20v-3.5a1 1 0 0 1 1-1z"
              clipRule="evenodd"
            />
            <path d="M7.076 11.617A1 1 0 0 1 8 11h2.5V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8H16a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1-.217-1.09" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowToShapeDownSolid;
