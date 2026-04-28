import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowCwLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c4.356 0 8.058-2.784 9.43-6.667a1 1 0 1 0-1.885-.666A8 8 0 1 1 12 4c1.552 0 2.866.561 4.116 1.44.84.592 1.619 1.301 2.408 2.06H15.5a1 1 0 1 0 0 2H21a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3.144c-.848-.818-1.754-1.65-2.733-2.34C15.795 2.77 14.085 2 12 2"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowCwLight;
