import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CropLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8 2a1 1 0 0 0-2 0v4H2a1 1 0 0 0 0 2h4v8a2 2 0 0 0 2 2h8v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2H8z" />
            <path d="M16 14a1 1 0 1 0 2 0V8a2 2 0 0 0-2-2h-6a1 1 0 0 0 0 2h6z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CropLight;
