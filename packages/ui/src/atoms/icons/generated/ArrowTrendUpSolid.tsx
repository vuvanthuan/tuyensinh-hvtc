import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTrendUpSolid(allProps: IconWrapperProps): React.ReactElement {
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
          <g clipPath="url(#prefix__a)">
            <path
              fill="#11181C"
              d="M23.383 12.924A1 1 0 0 0 24 12V6a1 1 0 0 0-1-1h-6a1 1 0 0 0-.707 1.707l1.94 1.94-4.733 4.732-3.94-3.94a1.5 1.5 0 0 0-2.12 0L.647 16.232a1 1 0 0 0 0 1.415l.707.707a1 1 0 0 0 1.414 0L8.5 12.62l3.94 3.94a1.5 1.5 0 0 0 2.12 0l5.794-5.793 1.939 1.94a1 1 0 0 0 1.09.216"
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

export default ArrowTrendUpSolid;
