import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function XmarkCircleLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C">
            <path d="M7.757 7.757a1 1 0 0 1 1.414 0L12 10.586l2.828-2.829a1 1 0 1 1 1.415 1.415L13.414 12l2.828 2.828a1 1 0 1 1-1.414 1.415L12 13.414 9.17 16.243a1 1 0 1 1-1.414-1.415L10.586 12 7.757 9.172a1 1 0 0 1 0-1.415" />
            <path
              fillRule="evenodd"
              d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default XmarkCircleLight;
