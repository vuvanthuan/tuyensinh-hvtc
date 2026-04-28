import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MicSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8 5a4 4 0 1 1 8 0v7a4 4 0 0 1-8 0z" />
            <path d="M6.25 11.844V12a5.75 5.75 0 0 0 11.5 0v-.156a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1V12a8.25 8.25 0 0 1-7 8.155V22a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-1.845a8.25 8.25 0 0 1-7-8.155v-.156a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MicSolid;
