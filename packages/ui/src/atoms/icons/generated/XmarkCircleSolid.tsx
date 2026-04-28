import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function XmarkCircleSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m6.757-4.95a1 1 0 0 1 1.415 0L12 9.88l2.828-2.829a1 1 0 0 1 1.415 0l.707.707a1 1 0 0 1 0 1.415L14.12 12l2.829 2.828a1 1 0 0 1 0 1.415l-.707.707a1 1 0 0 1-1.415 0L12 14.12 9.172 16.95a1 1 0 0 1-1.415 0l-.707-.707a1 1 0 0 1 0-1.415L9.88 12 7.05 9.172a1 1 0 0 1 0-1.415z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default XmarkCircleSolid;
