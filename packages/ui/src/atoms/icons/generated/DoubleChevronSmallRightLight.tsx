import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DoubleChevronSmallRightLight(
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
          <g fill="#11181C" fillRule="evenodd" clipRule="evenodd">
            <path d="M5.293 18.707a1 1 0 0 1 0-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0" />
            <path d="M11.293 18.707a1 1 0 0 1 0-1.414L16.586 12l-5.293-5.293a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default DoubleChevronSmallRightLight;
