import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MediaForwardEndLight(allProps: IconWrapperProps): React.ReactElement {
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
              d="M6.11 4.205C4.78 3.318 3 4.27 3 5.869v12.263c0 1.597 1.78 2.55 3.11 1.664l9.197-6.132a2 2 0 0 0 0-3.328zM5 5.869 14.197 12 5 18.132z"
              clipRule="evenodd"
            />
            <path d="M21 5a1 1 0 1 0-2 0v14a1 1 0 0 0 2 0z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MediaForwardEndLight;
