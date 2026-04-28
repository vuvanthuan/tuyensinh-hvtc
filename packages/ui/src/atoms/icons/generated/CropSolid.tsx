import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CropSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M6.5 1a1 1 0 0 1 1 1v14.5H22a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2.5V22a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2.5H7A2.5 2.5 0 0 1 4.5 17V7.5H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2.5V2a1 1 0 0 1 1-1z" />
            <path d="M16.5 15V7.5H9v-3h8A2.5 2.5 0 0 1 19.5 7v8z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CropSolid;
