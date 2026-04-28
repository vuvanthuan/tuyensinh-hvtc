import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Chartbar2Light(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M13 21a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0zM5 21a1 1 0 1 0 2 0V11a1 1 0 1 0-2 0zM10 22a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1M17 21a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Chartbar2Light;
