import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowFromShapeRightLight(
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
            <path d="M7 4a1 1 0 0 0 0-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3a1 1 0 1 0 0-2H4V4z" />
            <path d="m21.707 12.707-5 5a1 1 0 0 1-1.414-1.414L18.586 13H8a1 1 0 1 1 0-2h10.586l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowFromShapeRightLight;
