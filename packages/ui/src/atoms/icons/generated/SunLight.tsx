import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SunLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1" />
            <path
              fillRule="evenodd"
              d="M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
              clipRule="evenodd"
            />
            <path d="M20.485 4.929a1 1 0 0 0-1.414-1.414L16.95 5.636a1 1 0 0 0 1.414 1.414zM24 12a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1M19.071 20.485a1 1 0 0 0 1.414-1.414l-2.121-2.121a1 1 0 1 0-1.414 1.414zM12 24a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1M3.515 19.071a1 1 0 1 0 1.414 1.414l2.121-2.121a1 1 0 0 0-1.414-1.414zM0 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1M4.929 3.515a1 1 0 1 0-1.414 1.414L5.636 7.05A1 1 0 0 0 7.05 5.636z" />
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

export default SunLight;
