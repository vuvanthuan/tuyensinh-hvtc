import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CheckmarkDoubleLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M17.582 6.957a1 1 0 0 0-1.414-1.414L5.545 16.165l-3.838-3.838a1 1 0 0 0-1.414 1.414l4.545 4.546a1 1 0 0 0 1.415 0zM23.582 6.957a1 1 0 0 0-1.414-1.414l-11.33 11.33a1 1 0 0 0 1.415 1.414z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CheckmarkDoubleLight;
