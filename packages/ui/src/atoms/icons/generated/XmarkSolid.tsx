import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function XmarkSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4.707 2.586a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 0 1.414L9.879 12l-7.293 7.293a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414 0L12 14.121l7.293 7.293a1 1 0 0 0 1.414 0l.707-.707a1 1 0 0 0 0-1.414L14.121 12l7.293-7.293a1 1 0 0 0 0-1.414l-.707-.707a1 1 0 0 0-1.414 0L12 9.879z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default XmarkSolid;
