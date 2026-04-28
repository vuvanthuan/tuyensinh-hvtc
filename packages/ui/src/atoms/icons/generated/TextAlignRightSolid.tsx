import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TextAlignRightSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M3 4a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM3 13a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1zM8 9.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM9 17.5a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default TextAlignRightSolid;
