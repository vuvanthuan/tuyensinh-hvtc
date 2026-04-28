import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FullscreenLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M21.71 2.295a1 1 0 0 1 .29.702V9a1 1 0 1 1-2 0V5.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L18.586 4H15a1 1 0 1 1 0-2h6c.275 0 .524.111.705.29zM10.707 14.707 5.414 20H9a1 1 0 1 1 0 2H2.997a1 1 0 0 1-.702-.29l-.004-.005A1 1 0 0 1 2 21v-6a1 1 0 1 1 2 0v3.586l5.293-5.293a1 1 0 0 1 1.414 1.414" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default FullscreenLight;
