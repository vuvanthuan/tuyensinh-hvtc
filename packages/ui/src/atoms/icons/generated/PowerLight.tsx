import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PowerLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M13 3a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z" />
            <path d="M6.28 6.707a1 1 0 1 0-1.414-1.414A9.7 9.7 0 0 0 2 12.176C2 17.62 6.496 22 12 22s10-4.38 10-9.824a9.7 9.7 0 0 0-2.866-6.883 1 1 0 1 0-1.414 1.414 7.7 7.7 0 0 1 2.28 5.47C20 16.478 16.437 20 12 20s-8-3.521-8-7.824c0-2.126.866-4.055 2.28-5.469" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default PowerLight;
