import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Arrow4WaySolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M8.076 5.383A1 1 0 0 0 9 6h1.5v4.5H6V9a1 1 0 0 0-1.707-.707l-3 3a1 1 0 0 0 0 1.414l3 3A1 1 0 0 0 6 15v-1.5h4.5V18H9a1 1 0 0 0-.707 1.707l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 15 18h-1.5v-4.5H18V15a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 18 9v1.5h-4.5V6H15a1 1 0 0 0 .707-1.707l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0-.217 1.09"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default Arrow4WaySolid;
