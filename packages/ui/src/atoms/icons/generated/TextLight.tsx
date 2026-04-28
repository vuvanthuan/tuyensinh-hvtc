import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TextLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5h-5v14h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V5H6v1a1 1 0 0 1-2 0z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TextLight;
