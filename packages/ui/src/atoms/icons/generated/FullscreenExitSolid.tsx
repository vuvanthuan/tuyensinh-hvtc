import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FullscreenExitSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="m20.04 10.11-2.015-2.014 3.682-3.682a1 1 0 0 0 0-1.414L21 2.293a1 1 0 0 0-1.414 0l-3.682 3.682L14.04 4.11a1 1 0 0 0-1.707.707v6a1 1 0 0 0 1 1h6a1 1 0 0 0 .707-1.707M3.96 13.89l2.015 2.014-3.682 3.682a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414 0l3.682-3.682L9.96 19.89a1 1 0 0 0 1.707-.707v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-.707 1.707" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default FullscreenExitSolid;
