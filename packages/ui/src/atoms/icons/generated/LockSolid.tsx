import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function LockSolid(allProps: IconWrapperProps): React.ReactElement {
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
            fillRule="evenodd"
            d="M5.5 10V7a6.5 6.5 0 1 1 13 0v3h.5a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3zm4.025-5.475A3.5 3.5 0 0 1 15.5 7v3h-7V7a3.5 3.5 0 0 1 1.025-2.475"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default LockSolid;
