import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function UserSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M7 14a5 5 0 0 0-5 5v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a5 5 0 0 0-5-5z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default UserSolid;
