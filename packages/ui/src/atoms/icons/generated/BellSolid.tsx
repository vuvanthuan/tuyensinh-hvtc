import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function BellSolid(allProps: IconWrapperProps): React.ReactElement {
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
              d="M4.584 7.417a7.417 7.417 0 0 1 14.833 0v.916c0 2.2.299 4.152.754 5.518.23.688.48 1.173.71 1.465.171.216.273.26.296.267a1 1 0 0 1 .99 1v.209a1 1 0 0 1-1 1H2.834a1 1 0 0 1-1-1v-.209a1 1 0 0 1 .989-1c.023-.007.125-.05.296-.267.23-.292.48-.777.71-1.465.456-1.366.754-3.317.754-5.518zm-1.766 8.168h.002z"
              clipRule="evenodd"
            />
            <path d="M9.25 19.5a1 1 0 0 0-.804 1.595C9.278 22.22 10.536 23 12 23c1.465 0 2.722-.78 3.554-1.905a1 1 0 0 0-.804-1.595z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default BellSolid;
