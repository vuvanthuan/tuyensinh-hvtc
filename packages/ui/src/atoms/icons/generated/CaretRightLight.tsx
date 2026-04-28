import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CaretRightLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M8.793 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.086 12 8.793 7.707a1 1 0 0 1 0-1.414"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default CaretRightLight;
