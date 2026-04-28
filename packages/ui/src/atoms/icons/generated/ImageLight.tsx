import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ImageLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            <path
              fillRule="evenodd"
              d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12.586l5.293-5.293a1 1 0 0 1 1.414 0l1.793 1.793 7.5-7.5V5a1 1 0 0 0-1-1zm15 5.414-6.793 6.793a1 1 0 0 1-1.414 0L10 14.414l-5.47 5.47c.14.074.3.116.47.116h14a1 1 0 0 0 1-1z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ImageLight;
