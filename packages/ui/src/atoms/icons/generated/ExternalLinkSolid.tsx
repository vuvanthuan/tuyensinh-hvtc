import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ExternalLinkSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M20.293 9.707A1 1 0 0 0 22 9V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-.707 1.707l1.94 1.94-6.647 6.646a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414 0l6.647-6.646z" />
            <path d="M4.5 8a.5.5 0 0 1 .5-.5h5.063a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5A3.5 3.5 0 0 0 1.5 8v11A3.5 3.5 0 0 0 5 22.5h11a3.5 3.5 0 0 0 3.5-3.5v-5.062a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V19a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ExternalLinkSolid;
