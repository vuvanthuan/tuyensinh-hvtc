import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TextUnderlineSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M7.5 2.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V10a7.5 7.5 0 0 0 15 0V2.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V10a4.5 4.5 0 1 1-9 0zM4 19.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default TextUnderlineSolid;
