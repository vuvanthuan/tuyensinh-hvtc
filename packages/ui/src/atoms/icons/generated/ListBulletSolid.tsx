import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ListBulletSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M4 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M21 7.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zM22 12.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM21 19.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ListBulletSolid;
