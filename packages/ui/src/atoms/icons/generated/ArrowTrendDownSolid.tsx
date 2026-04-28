import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTrendDownSolid(allProps: IconWrapperProps): React.ReactElement {
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
              d="M12.44 7.44 8.5 11.378 2.768 5.646a1 1 0 0 0-1.414 0l-.707.708a1 1 0 0 0 0 1.414L7.44 14.56a1.5 1.5 0 0 0 2.12 0l3.94-3.94 4.732 4.733-1.939 1.939A1 1 0 0 0 17 19h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1.707-.707l-1.94 1.94-5.792-5.794a1.5 1.5 0 0 0-2.121 0"
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

export default ArrowTrendDownSolid;
