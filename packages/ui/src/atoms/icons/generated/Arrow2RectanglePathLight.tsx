import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Arrow2RectanglePathLight(
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
            <path d="m18.586 7-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L18.586 5H7a5 5 0 0 0-5 5v1a1 1 0 1 0 2 0v-1a3 3 0 0 1 3-3zM7.707 14.707a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L5.414 19H17a5 5 0 0 0 5-5v-1a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3H5.414z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Arrow2RectanglePathLight;
