import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DeviceMobileSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7.714 23C6.076 23 5 21.507 5 20V4c0-1.507 1.076-3 2.714-3h8.572C17.924 1 19 2.493 19 4v16c0 1.507-1.076 3-2.714 3zM12 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default DeviceMobileSolid;
