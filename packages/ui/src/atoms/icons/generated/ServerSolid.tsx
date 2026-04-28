import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ServerSolid(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C" fillRule="evenodd" clipRule="evenodd">
            <path d="M1 4.75C1 3.11 2.473 2 4 2h16c1.527 0 3 1.11 3 2.75v3.5C23 9.89 21.527 11 20 11H4c-1.527 0-3-1.11-3-2.75zM7 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M1 15.75C1 14.11 2.473 13 4 13h16c1.527 0 3 1.11 3 2.75v3.5c0 1.64-1.473 2.75-3 2.75H4c-1.527 0-3-1.11-3-2.75zm6 1.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ServerSolid;
