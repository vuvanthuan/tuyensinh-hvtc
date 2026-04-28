import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ScissorsSolid(allProps: IconWrapperProps): React.ReactElement {
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
              d="M10.062 7.94a4.5 4.5 0 1 0-2.121 2.121L9.878 12 7.94 13.939a4.5 4.5 0 1 0 2.121 2.121l2.994-2.994.006-.005.005-.006 8.348-8.348a1 1 0 0 0 0-1.414l-.707-.707a1 1 0 0 0-1.414 0L12 9.879zM6 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 12a1.5 1.5 0 1 0 1.112.493l-.105-.105A1.5 1.5 0 0 0 6 16.5"
              clipRule="evenodd"
            />
            <path d="M14.293 13.586a1 1 0 0 1 1.414 0l5.707 5.707a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414 0l-5.707-5.707a1 1 0 0 1 0-1.414z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ScissorsSolid;
