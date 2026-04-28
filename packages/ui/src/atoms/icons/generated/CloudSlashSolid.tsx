import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CloudSlashSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M23.354 2.768a1 1 0 0 0 0-1.414l-.708-.708a1 1 0 0 0-1.414 0L16.8 5.08A7.001 7.001 0 0 0 4.1 7.813 7.5 7.5 0 0 0 .001 14.5c0 2.04.816 3.89 2.136 5.242l-1.49 1.49a1 1 0 0 0 0 1.414l.708.707a1 1 0 0 0 1.414 0zM20.29 9.084a1 1 0 0 1 .67.814 4.5 4.5 0 0 1-.081 1.642 5.501 5.501 0 0 1-1.518 10.393A1 1 0 0 1 19 22H9a1 1 0 0 1-.707-1.707L19.262 9.324a1 1 0 0 1 1.027-.24" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CloudSlashSolid;
