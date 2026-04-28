import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CloudSlashLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M23.707 1.707A1 1 0 0 0 22.293.293l-5.221 5.221A7.001 7.001 0 0 0 4.1 7.813 7.5 7.5 0 0 0 0 14.5c0 2.22.966 4.216 2.498 5.588L.293 22.293a1 1 0 1 0 1.414 1.414l2.998-2.998.03-.03L17.668 7.746l.015-.015zm-8.122 5.294a5.002 5.002 0 0 0-9.567 1.572 1 1 0 0 1-.615.84 5.502 5.502 0 0 0-1.488 9.258z"
              clipRule="evenodd"
            />
            <path d="M20.96 9.898a1 1 0 1 0-1.982.266 2.53 2.53 0 0 1-.266 1.503 1 1 0 0 0 .641 1.438 3.502 3.502 0 0 1-.463 6.874 1 1 0 0 0-.123.021H9a1 1 0 1 0 0 2h10a1 1 0 0 0 .361-.067 5.501 5.501 0 0 0 1.518-10.393 4.5 4.5 0 0 0 .081-1.642" />
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

export default CloudSlashLight;
