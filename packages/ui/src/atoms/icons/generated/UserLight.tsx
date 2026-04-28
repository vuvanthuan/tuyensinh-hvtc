import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function UserLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M12 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M8.5 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
              clipRule="evenodd"
            />
            <path d="M8 14a6 6 0 0 0-6 6v2a1 1 0 1 0 2 0v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2a1 1 0 1 0 2 0v-2a6 6 0 0 0-6-6z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default UserLight;
