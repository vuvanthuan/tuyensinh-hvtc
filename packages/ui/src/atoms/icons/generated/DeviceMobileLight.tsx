import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DeviceMobileLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
              fillRule="evenodd"
              d="M5 20c0 1.507 1.076 3 2.714 3h8.572C17.924 23 19 21.507 19 20V4c0-1.507-1.076-3-2.714-3H7.714C6.076 1 5 2.493 5 4zm2.714 1C7.46 21 7 20.703 7 20V4c0-.702.459-1 .714-1h8.572c.255 0 .714.298.714 1v16c0 .703-.459 1-.714 1z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default DeviceMobileLight;
