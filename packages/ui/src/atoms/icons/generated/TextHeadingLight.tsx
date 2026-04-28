import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TextHeadingLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M6 3a1 1 0 0 1 1 1v7h10V4a1 1 0 1 1 2 0v16a1 1 0 1 1-2 0v-7H7v7a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TextHeadingLight;
