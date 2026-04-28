import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function LinkSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8 7.5a4.5 4.5 0 0 0 0 9h1.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a7.5 7.5 0 0 1 0-15h1.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z" />
            <path d="M6.5 11.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z" />
            <path d="M20.5 12A4.5 4.5 0 0 0 16 7.5h-1.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H16a7.5 7.5 0 0 1 0 15h-1.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H16a4.5 4.5 0 0 0 4.5-4.5" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default LinkSolid;
