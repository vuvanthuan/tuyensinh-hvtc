import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SquareOnSquareSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M4 .5A3.5 3.5 0 0 0 .5 4v9A3.5 3.5 0 0 0 4 16.5h2V9a3 3 0 0 1 3-3h7.5V4A3.5 3.5 0 0 0 13 .5z" />
            <path d="M8 10.813A2.813 2.813 0 0 1 10.813 8h9.375A2.813 2.813 0 0 1 23 10.813v9.375A2.813 2.813 0 0 1 20.188 23h-9.375A2.813 2.813 0 0 1 8 20.188z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default SquareOnSquareSolid;
