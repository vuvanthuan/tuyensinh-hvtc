import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function LockOpenSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M9.525 4.525A3.5 3.5 0 0 1 15.208 5.6l.2.458a1 1 0 0 0 1.316.517l.917-.4a1 1 0 0 0 .516-1.317l-.2-.458A6.5 6.5 0 0 0 7.404 2.404 6.5 6.5 0 0 0 5.5 7v3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3H8.5V7a3.5 3.5 0 0 1 1.025-2.475"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default LockOpenSolid;
