import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArchiveboxLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M10 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" />
            <path
              fillRule="evenodd"
              d="M0 3a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9H1a1 1 0 0 1-1-1zm20 16V9H4v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1m2-12H2V4h20z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArchiveboxLight;
