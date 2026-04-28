import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function LinkLight(allProps: IconWrapperProps): React.ReactElement {
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
          <path
            fill="#11181C"
            fillRule="evenodd"
            d="M8 7a5 5 0 0 0 0 10h2a1 1 0 1 1 0 2H8A7 7 0 1 1 8 5h2a1 1 0 1 1 0 2zm5-1a1 1 0 0 1 1-1h2a7 7 0 1 1 0 14h-2a1 1 0 1 1 0-2h2a5 5 0 0 0 0-10h-2a1 1 0 0 1-1-1m-6 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default LinkLight;
