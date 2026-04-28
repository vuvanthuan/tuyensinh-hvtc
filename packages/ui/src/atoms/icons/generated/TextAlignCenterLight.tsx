import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TextAlignCenterLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zM3 13a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zM5 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M6 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default TextAlignCenterLight;
