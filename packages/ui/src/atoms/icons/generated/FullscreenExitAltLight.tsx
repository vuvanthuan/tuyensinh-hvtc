import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FullscreenExitAltLight(
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
            <path d="M7 9a2 2 0 0 0 2-2V3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2zM17 9a2 2 0 0 1-2-2V3a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2zM17 15a2 2 0 0 0-2 2v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2zM9 17a2 2 0 0 0-2-2H3a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default FullscreenExitAltLight;
