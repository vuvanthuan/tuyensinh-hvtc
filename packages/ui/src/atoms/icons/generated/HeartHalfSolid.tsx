import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function HeartHalfSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7 2C3.313 2 1 5.215 1 8.5c0 3.341 1.674 6.2 3.772 8.43 2.1 2.233 4.705 3.927 6.78 4.964.15.075.311.11.473.106V4.303l-.028.033a7 7 0 0 0-1.132-1.128C9.929 2.48 8.709 2 7 2"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default HeartHalfSolid;
