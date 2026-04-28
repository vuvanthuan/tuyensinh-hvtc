import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function WiFiLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M2.061 8.748a15 15 0 0 1 19.838 0 1 1 0 1 0 1.322-1.5 17 17 0 0 0-22.482 0 1 1 0 0 0 1.322 1.5" />
            <path d="M5.62 12.316a10 10 0 0 1 12.8 0 1 1 0 1 0 1.28-1.537 12 12 0 0 0-15.36 0 1 1 0 1 0 1.28 1.537" />
            <path d="M11.985 14.999a5 5 0 0 0-2.896.923 1 1 0 1 1-1.158-1.63 7 7 0 0 1 8.108 0 1 1 0 1 1-1.158 1.63 5 5 0 0 0-2.896-.924M11.98 19.997a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default WiFiLight;
