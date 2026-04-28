import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MicLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M12 1a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4m-2 4a2 2 0 1 1 4 0v7a2 2 0 1 1-4 0z"
              clipRule="evenodd"
            />
            <path d="M5 9a1 1 0 0 1 1 1v2a6 6 0 1 0 12 0v-2a1 1 0 1 1 2 0v2a8 8 0 0 1-7.002 7.938L13 20v2a1 1 0 1 1-2 0v-2q0-.032.002-.062A8 8 0 0 1 4 12v-2a1 1 0 0 1 1-1" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MicLight;
