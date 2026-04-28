import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FullscreenExitAltSolid(
  allProps: IconWrapperProps,
): React.ReactElement {
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
            <path d="M7 9.5A2.5 2.5 0 0 0 9.5 7V2.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zM17 9.5A2.5 2.5 0 0 1 14.5 7V2.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zM17 14.5a2.5 2.5 0 0 0-2.5 2.5v4.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM9.5 17A2.5 2.5 0 0 0 7 14.5H2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default FullscreenExitAltSolid;
