import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FullscreenAltLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M4 2a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0V4h4a1 1 0 0 0 0-2zM20 2a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V4h-4a1 1 0 1 1 0-2zM20 22a2 2 0 0 0 2-2v-4a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2zM2 20a2 2 0 0 0 2 2h4a1 1 0 1 0 0-2H4v-4a1 1 0 1 0-2 0z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default FullscreenAltLight;
