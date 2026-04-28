import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DocSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M11 9V1H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11h-8a2 2 0 0 1-2-2" />
            <path d="M13 1v8h8z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default DocSolid;
