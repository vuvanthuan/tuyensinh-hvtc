import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FullscreenAltSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M4 1.5A2.5 2.5 0 0 0 1.5 4v4.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM20 1.5A2.5 2.5 0 0 1 22.5 4v4.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-4h-4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM20 22.5a2.5 2.5 0 0 0 2.5-2.5v-4.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zM1.5 20A2.5 2.5 0 0 0 4 22.5h4.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-4v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default FullscreenAltSolid;
