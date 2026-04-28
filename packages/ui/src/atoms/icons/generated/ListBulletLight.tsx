import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ListBulletLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M3.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8 5a1 1 0 0 0 0 2h13a1 1 0 1 0 0-2zM8 11a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zM7 18a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M3.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ListBulletLight;
