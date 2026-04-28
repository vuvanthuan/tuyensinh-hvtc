import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MediaBackwardEndSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M17.89 4.204C19.22 3.318 21 4.271 21 5.87v12.263c0 1.597-1.78 2.55-3.11 1.664l-9.197-6.132a2 2 0 0 1 0-3.328z" />
            <path
              fillRule="evenodd"
              d="M4.5 3.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MediaBackwardEndSolid;
