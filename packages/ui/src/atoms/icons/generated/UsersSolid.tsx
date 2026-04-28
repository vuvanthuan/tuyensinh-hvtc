import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function UsersSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M1.5 6.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M14.5 6.5c0 1.5-.44 2.898-1.2 4.07a5.5 5.5 0 1 0 0-8.14 7.47 7.47 0 0 1 1.2 4.07M0 18a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zM16 18v5h7a1 1 0 0 0 1-1v-4a4 4 0 0 0-4-4h-5.528A5.98 5.98 0 0 1 16 18" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default UsersSolid;
