import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowCcwLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M2 3a1 1 0 0 1 2 0v3.144c.846-.816 1.75-1.646 2.725-2.333C8.199 2.772 9.912 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.356 0-8.058-2.784-9.43-6.667a1 1 0 1 1 1.885-.666A8 8 0 0 0 12 20a8 8 0 1 0 0-16c-1.554 0-2.871.563-4.123 1.445-.838.591-1.614 1.298-2.401 2.055H8.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowCcwLight;
