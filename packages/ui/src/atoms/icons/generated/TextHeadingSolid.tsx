import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TextHeadingSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M6.5 2.5a1 1 0 0 1 1 1v7h9v-7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-7h-9v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TextHeadingSolid;
