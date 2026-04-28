import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PlusSolid(allProps: IconWrapperProps): React.ReactElement {
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
          <path
            fill="#11181C"
            d="M13.5 3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7.5H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7.5V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.5H21a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-7.5z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default PlusSolid;
