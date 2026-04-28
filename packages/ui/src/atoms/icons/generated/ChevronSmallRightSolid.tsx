import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ChevronSmallRightSolid(
  allProps: IconWrapperProps,
): React.ReactElement {
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
            d="M8.086 5.414a1 1 0 0 0 0 1.414l5.293 5.293-5.293 5.293a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414 0l6.354-6.353a1.5 1.5 0 0 0 0-2.121l-6.354-6.354a1 1 0 0 0-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ChevronSmallRightSolid;
