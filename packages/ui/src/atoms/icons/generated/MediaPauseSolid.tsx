import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MediaPauseSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M6 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MediaPauseSolid;
