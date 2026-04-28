import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function EnvelopeSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M1.602 4.201A3 3 0 0 1 4 3h16c.978 0 1.85.473 2.398 1.201L12 11.764z" />
            <path d="M1 6.237V18c0 1.652 1.348 3 3 3h16c1.652 0 3-1.348 3-3V6.236l-9.824 7.145a2 2 0 0 1-2.352 0z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default EnvelopeSolid;
