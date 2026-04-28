import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowThinLeftSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7.383 16.924A1 1 0 0 0 8 16v-2.5h13a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8V8a1 1 0 0 0-1.707-.707l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.09.217"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowThinLeftSolid;
