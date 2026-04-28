import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function AlertTriangleLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C" clipPath="url(#prefix__a)">
            <path d="M12 6.5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M12 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
              fillRule="evenodd"
              d="M9.827 2.229c.967-1.639 3.38-1.639 4.347 0l9.486 16.073c.998 1.691-.296 3.698-2.174 3.698H2.514C.636 22-.658 19.993.34 18.302zm2.624 1.017c-.193-.328-.709-.328-.902 0L2.063 19.319c-.154.26.007.681.45.681h18.974c.443 0 .604-.42.45-.681z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default AlertTriangleLight;
