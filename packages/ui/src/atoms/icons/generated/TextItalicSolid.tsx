import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TextItalicSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M18.5 2.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2.46l-4.875 13H12.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2.46l4.876-13H11.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TextItalicSolid;
