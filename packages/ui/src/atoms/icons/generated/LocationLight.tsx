import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function LocationLight(allProps: IconWrapperProps): React.ReactElement {
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
            stroke="#11181C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.355 12.339a.5.5 0 0 1-.092-.937l16.472-7.803a.5.5 0 0 1 .666.666l-7.803 16.472a.5.5 0 0 1-.937-.092L10 14z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default LocationLight;
